import deleteUser from '@/services/deleteUser';
import { useState } from 'react';
import Button from '../Buttons/Button';
import style from './DeleteUserForm.module.css';

const DeleteUserForm = ({ currentUser, onDeleteSuccess, onError }) => {
   const [isSubmitting, setIsSubmitting] = useState(false);

   return (
      <form
         className={style.deleteForm}
         onSubmit={e =>
            handleClick(
               e,
               currentUser.id,
               onDeleteSuccess,
               setIsSubmitting,
               onError
            )
         }>
         <p>
            Estas seguro de que quieres elminar al usuario {'"'}
            {currentUser.name}
            {'"'}
         </p>
         <div className={style.buttons} disabled={isSubmitting}>
            <Button filled={false}>Cancelar</Button>
            <Button type='submit' disabled={isSubmitting}>
               {isSubmitting ? 'Eliminando...' : 'Eliminar usuario'}
            </Button>
         </div>
      </form>
   );
};

const handleClick = async (
   e,
   userId,
   onDeleteSuccess,
   setIsSubmitting,
   onError
) => {
   e.preventDefault();
   setIsSubmitting(true);

   const success = await deleteUser(userId);

   if (success) onDeleteSuccess();
   else {
      setIsSubmitting(false);
      onError();
   }
};

export default DeleteUserForm;
