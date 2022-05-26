import { useState } from 'react';

const initialAlert = {
   kind: undefined,
   text: '',
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
      setSomeAlert('error', 'Se ha producido un error');
   };

   const setSuccessAlert = () => {
      setSomeAlert('success', 'Usuario creado con éxito');
   };

   const setDeleteSuccesAlert = () =>
      setSomeAlert('success', 'Usuario eliminado con éxito');

   return { alert, setSuccessAlert, setErrorAlert, setDeleteSuccesAlert };
};

export default useAlert;
