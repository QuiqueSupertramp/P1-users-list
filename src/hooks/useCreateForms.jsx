import { validateName, validateUsername } from '@/lib/helpers/inputValidations';
import checkByUsername from '@/services/checkByUsername';
import { useState, useEffect } from 'react';

const useCreateForms = () => {
   const [newUser, setNewUser] = useState({
      name: {
         value: '',
         error: undefined,
      },
      username: {
         value: '',
         loading: false,
         error: undefined,
      },
   });

   const setName = name => {
      const error = validateName(name);
      setNewUser({
         ...newUser,
         name: {
            value: name,
            error,
         },
      });
   };

   const setUsername = username => {
      const error = validateUsername(username);
      const loading = error === undefined ? false : !error;

      setNewUser({
         ...newUser,
         username: {
            value: username,
            error,
            loading,
         },
      });
   };

   const setUsernameError = error => {
      setNewUser(preNewUser => ({
         ...preNewUser,
         username: {
            ...preNewUser.username,
            error,
            loading: false,
         },
      }));
   };

   useEffect(() => {
      if (newUser.username.loading) {
         const controller = new AbortController();
         const signal = controller.signal;
         const timeoutId = setTimeout(() => {
            checkUsernameAsync(
               newUser.username.value,
               setUsernameError,
               signal
            );
         }, 500);
         return () => {
            controller.abort();
            clearTimeout(timeoutId);
         };
      }
   }, [newUser.username.loading, newUser.username.value]);

   return {
      name: newUser.name,
      username: newUser.username,
      setName,
      setUsername,
   };
};

const checkUsernameAsync = async (
   currentUsername,
   setUsernameError,
   signal
) => {
   const error = await checkByUsername(currentUsername, signal);
   setUsernameError(error);
};

export default useCreateForms;
