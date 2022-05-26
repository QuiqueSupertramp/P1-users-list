import { useState } from 'react';

const initialAlert = {
   kind: undefined,
   text: '',
};

const ALERTS = {
   ERROR: ['error', 'Se ha producido un error'],
   CREATE_SUCCESS: ['success', 'Usuario creado con éxito'],
   EDIT_SUCCESS: ['success', 'Usuario editado con éxito'],
   DELETE_SUCCESS: ['success', 'Usuario eliminado con éxito'],
};

const useAlert = () => {
   const [alert, setAlert] = useState(initialAlert);

   const setSomeAlert = (kind, text) => {
      setAlert({
         kind,
         text,
      });

      setTimeout(() => {
         setAlert(initialAlert);
      }, 5000);
   };

   const setErrorAlert = () => {
      setSomeAlert(ALERTS.ERROR[0], ALERTS.ERROR[1]);
   };

   const setSuccessAlert = () => {
      setSomeAlert(ALERTS.CREATE_SUCCESS[0], ALERTS.CREATE_SUCCESS[1]);
   };

   const setDeleteSuccesAlert = () =>
      setSomeAlert(ALERTS.DELETE_SUCCESS[0], ALERTS.DELETE_SUCCESS[1]);

   return { alert, setSuccessAlert, setErrorAlert, setDeleteSuccesAlert };
};

export default useAlert;
