import useFilters from '@/hooks/useFilters';
import Pagination from '../Pagination/Pagination';
import UsersFilters from '../UsersFilters/UsersFilters';
import UsersTable from './UsersTable';
import style from './UsersList.module.css';
import useUsers from '@/hooks/useUsers';
import Button from '../Buttons/Button';
import useForms from '@/hooks/useForms';
import CreateUserForm from '../forms/CreateUserForm';
import { getUsersToDisplay } from '@/lib/helpers/getUsersToDisplay';
import FormWrapper from '../forms/FormWrapper';

const UsersList = () => {
   const {
      filters,
      pagination,
      filtersSetters,
      paginationSetters,
      resetFilters,
   } = useFilters();
   const { users, status, reloadUsers } = useUsers();
   const { currentForm, setFilterForm, setCreateForm } = useForms();

   const { paginatedUsers, totalPages } = getUsersToDisplay(
      users,
      filters,
      pagination
   );

   const onSuccess = () => {
      setFilterForm();
      reloadUsers();
      resetFilters();
   };

   return (
      <section className={style.usersList}>
         {currentForm === 0 ? (
            <UsersFilters
               filters={filters}
               filtersSetters={filtersSetters}
               slot={<Button onClick={setCreateForm}>Añadir usuario</Button>}
            />
         ) : (
            <FormWrapper closeForm={setFilterForm}>
               <CreateUserForm onSuccess={onSuccess} />
            </FormWrapper>
         )}
         <UsersTable users={paginatedUsers} status={status} />
         {users?.length >= 1 && (
            <Pagination
               totalPages={totalPages}
               pagination={pagination}
               paginationSetters={paginationSetters}
            />
         )}
      </section>
   );
};

export default UsersList;
