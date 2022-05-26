import deleteUser from '@/services/deleteUser';
import { useState } from 'react';
import Button from '../Buttons/Button';
import style from './DeleteUserForm.module.css';

const DeleteUserForm = ({ currentUser, onDeleteSuccess, onError }) => {
   const [isSubmitting, setIsSubmitting] = useState(false);

   return (
      <div className={style.deleteForm}>
         <p>
            Estas seguro de que quieres elminar al usuario {'"'}
            {currentUser.name}
            {'"'}
         </p>
         <div className={style.buttons}>
            <Button filled={false}>Cancelar</Button>
            <Button
               disabled={isSubmitting}
               onClick={() =>
                  handleClick(
                     currentUser,
                     onDeleteSuccess,
                     setIsSubmitting,
                     onError
                  )
               }>
               Eliminar usuario
            </Button>
         </div>
      </div>
   );
};

const handleClick = async (
   currentUser,
   onDeleteSuccess,
   setIsSubmitting,
   onError
) => {
   setIsSubmitting(true);
   const success = await deleteUser(currentUser.id);
   if (success) onDeleteSuccess();
   else {
      setIsSubmitting(false);
      onError();
   }
};

export default DeleteUserForm;
