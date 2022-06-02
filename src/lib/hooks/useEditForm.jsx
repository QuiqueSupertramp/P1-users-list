import { useState, useEffect } from 'react';
import { validateName, validateUsername } from '../helpers/inputValidations';
import findByUsername from '../services/findByUsername';

const useEditForm = currentUser => {
   const [formValues, setFormValues] = useState(() => getInitialState(currentUser));

   const setName = newName => {
      const error = validateName(newName);
      setFormValues({
         ...formValues,
         name: {
            value: newName,
            error,
         },
      });
   };

   const setUsername = newUsername => {
      const error = validateUsername(newUsername);
      const isInitialUsername = newUsername === currentUser.username;
      // Si es correcto,activamos el loading para q active el sideEffect
      const loading = error === undefined ? false : !error && !isInitialUsername;

      setFormValues({
         ...formValues,
         username: {
            value: newUsername,
            error,
            loading,
         },
      });
   };

   const setRole = newRole => setFormValues({ ...formValues, role: newRole });
   const setActive = newActive => setFormValues({ ...formValues, active: newActive });

   const setUsernameError = error =>
      setFormValues(prevUser => ({
         ...prevUser,
         username: {
            ...prevUser.username,
            error,
            loading: false,
         },
      }));

   const isFormInvalid =
      areInitialUsers(formValues, currentUser) ||
      !formValues.name.value ||
      formValues.name.error ||
      !formValues.username.value ||
      formValues.username.error ||
      formValues.username.loading;

   useEffect(() => {
      setFormValues(getInitialState(currentUser));
   }, [currentUser]);

   useEffect(() => {
      if (formValues.username.loading) {
         const controller = new AbortController();
         const signal = controller.signal;
         const timeoutId = setTimeout(() => {
            checkIfUsernameExist(formValues.username.value, setUsernameError, signal);
         }, 500);
         return () => {
            controller.abort();
            clearTimeout(timeoutId);
         };
      }
   }, [formValues.username.loading, formValues.username.value]);

   return {
      formValues,
      setName,
      setUsername,
      setRole,
      setActive,
      isFormInvalid,
   };
};

const getInitialState = currentUser => ({
   name: {
      value: currentUser.name,
      error: undefined,
   },
   username: {
      value: currentUser.username,
      error: undefined,
      loading: false,
   },
   role: currentUser.role,
   active: currentUser.active,
});

const checkIfUsernameExist = async (currentUsername, setUsernameError, signal) => {
   const res = await findByUsername(currentUsername, signal);
   if (res.status.aborted) return;
   setUsernameError(res.user ? 'El usuario ya existe' : false);
};

const areInitialUsers = (formValues, currentUser) =>
   formValues.name.value === currentUser.name &&
   formValues.username.value === currentUser.username &&
   formValues.username.role === currentUser.role &&
   formValues.username.active === currentUser.active;

export default useEditForm;
