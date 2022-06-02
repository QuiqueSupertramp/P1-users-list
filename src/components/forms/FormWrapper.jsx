import style from './FormWrapper.module.css';
import IconButton from '../Buttons/IconButton';
import CrossIcon from '../icons/CrossIcon';
import { useContext } from 'react';
import { UsersFormsContext } from '@/lib/contexts/UsersFormsContext';
import USERS_FORMS from '@/lib/constants/users_forms';
import CreateUserForm from './CreateUserForm';
import EditUserForm from './EditUserForm';
import DeleteUserForm from './DeleteUserForm';

const FormWrapper = () => {
   const { currentForm, setFilterForm } = useContext(UsersFormsContext);

   const form = FORMS[currentForm];

   if (!form) return null;

   return (
      <div className={style.wrapper}>
         <IconButton className={style.cancelButton} icon={CrossIcon} onClick={setFilterForm} />
         {form}
      </div>
   );
};

const FORMS = {
   [USERS_FORMS.CREATE]: <CreateUserForm />,
   [USERS_FORMS.EDIT]: <EditUserForm />,
   [USERS_FORMS.DELETE]: <DeleteUserForm />,
};

export default FormWrapper;
