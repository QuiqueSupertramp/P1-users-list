import { UsersFormsContext } from '@/lib/contexts/UsersFormsContext';
import deleteUser from '@/lib/services/deleteUser';
import { useState, useContext } from 'react';
import Button from '../Buttons/Button';
import style from './DeleteUserForm.module.css';

const DeleteUserForm = () => {
   const { currentUser, setFilterForm, onSuccess } = useContext(UsersFormsContext);
   const [isSubmitting, setIsSubmitting] = useState(false);

   return (
      <form
         className={style.deleteForm}
         onSubmit={e => handleClick(e, currentUser.id, onSuccess, setIsSubmitting)}>
         <p>
            Estas seguro de que quieres elminar al usuario {'"'}
            {currentUser.name}
            {'"'}
         </p>
         <div className={style.buttons} disabled={isSubmitting}>
            <Button type='button' filled={false} onClick={setFilterForm}>
               Cancelar
            </Button>
            <Button type='submit' disabled={isSubmitting}>
               {isSubmitting ? 'Eliminando...' : 'Eliminar usuario'}
            </Button>
         </div>
      </form>
   );
};

const handleClick = async (e, userId, onSuccess, setIsSubmitting) => {
   e.preventDefault();
   setIsSubmitting(true);

   const success = await deleteUser(userId);

   success ? onSuccess() : setIsSubmitting(false);
};

export default DeleteUserForm;
