import { USER_ROLES } from '@/lib/constants/roles';
import { UsersFormsContext } from '@/lib/contexts/UsersFormsContext';
import useEditForm from '@/lib/hooks/useEditForm';
import updateUser from '@/lib/services/updateUser';
import { useState, useContext } from 'react';
import Button from '../Buttons/Button';
import Checkbox from '../Inputs/Checkbox';
import InputText from '../Inputs/InputText';
import InputTextAsync from '../Inputs/InputTextAsync';
import Select from '../Inputs/Select';
import style from './EditUserForm.module.css';

const EditUserForm = () => {
   const { currentUser, onSuccess } = useContext(UsersFormsContext);
   const [isSubmitting, setIsSubmitting] = useState(false);

   const {
      formValues,
      setName,
      setUsername,
      setRole,
      setActive,
      isFormInvalid,
   } = useEditForm(currentUser);

   return (
      <form
         className={style.editForm}
         onSubmit={e =>
            handleSubmit(
               e,
               currentUser.id,
               formValues,
               setIsSubmitting,
               onSuccess
            )
         }>
         <div className={style.row}>
            <InputText
               label='Nombre'
               placeholder='Jhon Doe'
               error={formValues.name.error}
               value={formValues.name.value}
               onChange={e => setName(e.target.value)}
            />
            <InputTextAsync
               label='Username'
               placeholder='JhonDoe'
               isLoading={formValues.username.loading}
               error={formValues.username.error}
               value={formValues.username.value}
               onChange={e => setUsername(e.target.value)}
            />
         </div>
         <div className={style.row}>
            <Select
               value={formValues.role}
               onChange={e => setRole(e.target.value)}>
               <option value={USER_ROLES.STUDENT}>Alumno</option>
               <option value={USER_ROLES.TEACHER}>Profesor</option>
               <option value={USER_ROLES.OTHER}>Otro</option>
            </Select>
            <Checkbox
               label='¿Activo?'
               checked={formValues.active}
               onChange={e => setActive(e.target.checked)}
            />
            <Button type='submit' disabled={isFormInvalid || isSubmitting}>
               {isSubmitting === true ? 'Editando...' : 'Editar Usuario'}
            </Button>
         </div>
      </form>
   );
};

const handleSubmit = async (e, id, formValues, setIsSubmitting, onSuccess) => {
   e.preventDefault();
   setIsSubmitting(true);

   const user = {
      id,
      name: formValues.name.value,
      username: formValues.username.value,
      role: formValues.role,
      active: formValues.active,
   };

   const success = await updateUser(user);

   if (success) onSuccess();
   else setIsSubmitting(false);
};

export default EditUserForm;
