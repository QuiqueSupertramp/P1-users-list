import Button from '../Buttons/Button';
import CreateUserForm from '../forms/CreateUserForm';
import DeleteUserForm from '../forms/DeleteUserForm';
import FormWrapper from '../forms/FormWrapper';
import UsersFilters from '../UsersFilters/UsersFilters';

const Header = ({
   filters,
   filtersSetters,
   onSuccess,
   setErrorAlert,
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
            <CreateUserForm onSuccess={onSuccess} onError={setErrorAlert} />
         </FormWrapper>
      );
   if (currentForm === 3)
      return (
         <FormWrapper closeForm={setFilterForm}>
            <DeleteUserForm
               currentUser={currentUser}
               onDeleteSuccess={onDeleteSuccess}
               onError={setErrorAlert}
            />
         </FormWrapper>
      );
};

export default Header;
