import Button from '@/components/Buttons/Button';
import CreateUserForm from '@/components/forms/CreateUserForm';
import DeleteUserForm from '@/components/forms/DeleteUserForm';
import FormWrapper from '@/components/forms/FormWrapper';
import UsersFilters from './UsersFilters/UsersFilters';

const Header = ({
   filters,
   filtersSetters,
   onSuccess,
   currentForm,
   setFilterForm,
   setCreateForm,
   currentUser,
   onDeleteSuccess,
}) => {
   if (currentForm === 0)
      return (
         <UsersFilters
            filters={filters}
            filtersSetters={filtersSetters}
            slot={<Button onClick={setCreateForm}>Añadir usuario</Button>}
         />
      );
   if (currentForm === 1)
      return (
         <FormWrapper closeForm={setFilterForm}>
            <CreateUserForm onSuccess={onSuccess} />
         </FormWrapper>
      );
   if (currentForm === 3)
      return (
         <FormWrapper closeForm={setFilterForm}>
            <DeleteUserForm
               currentUser={currentUser}
               onDeleteSuccess={onDeleteSuccess}
            />
         </FormWrapper>
      );
};

export default Header;
