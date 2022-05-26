import style from './CreateUserForm.module.css';
import InputText from '../Inputs/InputText';
import Select from '../Inputs/Select';
import { USER_ROLES } from '@/lib/constants/roles';
import Checkbox from '../Inputs/Checkbox';
import Button from '../Buttons/Button';
import InputTextAsync from '../Inputs/InputTextAsync';
import useCreateForms from '@/hooks/useCreateForms';
import createUser from '@/services/createUser';
import { useState } from 'react';

const CreateUserForm = ({ onSuccess, onError }) => {
   const [isSubmitting, setIsSubmitting] = useState(false);

   const { name, username, setName, setUsername, isFormInvalid } =
      useCreateForms();

   return (
      <form
         onSubmit={e =>
            handleSubmit(e, name, username, setIsSubmitting, onSuccess, onError)
         }
         className={style.createForm}>
         <div className={style.row}>
            <InputText
               label='Nombre'
               placeholder='Jhon Doe'
               error={name.error}
               value={name.value}
               onChange={e => setName(e.target.value)}
            />
            <InputTextAsync
               label='Username'
               placeholder='JhonDoe'
               isLoading={username.loading}
               error={username.error}
               value={username.value}
               onChange={e => setUsername(e.target.value)}
            />
         </div>
         <div className={style.row}>
            <Select name='role'>
               <option value={USER_ROLES.STUDENT}>Alumno</option>
               <option value={USER_ROLES.TEACHER}>Profesor</option>
               <option value={USER_ROLES.OTHER}>Otro</option>
            </Select>
            <Checkbox label='¿Activo?' name='active' />
            <Button type='submit' disabled={isFormInvalid || isSubmitting}>
               {isSubmitting === true ? 'Enviando...' : 'Crear Usuario'}
            </Button>
         </div>
      </form>
   );
};

const handleSubmit = async (
   e,
   name,
   username,
   setIsSubmitting,
   onSuccess,
   onError
) => {
   e.preventDefault();
   setIsSubmitting(true);

   const newUser = {
      id: crypto.randomUUID(),
      name: name.value,
      username: username.value,
      role: e.target.role.value,
      active: e.target.active.checked,
   };

   const success = await createUser(newUser);

   if (success) onSuccess();
   else {
      setIsSubmitting(false);
      onError();
   }
};

export default CreateUserForm;
