import useFilters from '@/hooks/useFilters';
import Pagination from '../Pagination/Pagination';
import UsersFilters from '../UsersFilters/UsersFilters';
import UsersTable from './UsersTable';
import style from './UsersList.module.css';
import useUsers from '@/hooks/useUsers';
import Button from '../Buttons/Button';
import useForms from '@/hooks/useForms';
import CreateUserForm from '../forms/CreateUserForm';

const UsersList = () => {
   const { filters, pagination, filtersSetters, paginationSetters } =
      useFilters();
   const { users, status, totalPages } = useUsers(filters, pagination);
   const { currentForm, setFilterForm, setCreateForm } = useForms();

   return (
      <section className={style.usersList}>
         {currentForm === 0 ? (
            <UsersFilters
               filters={filters}
               filtersSetters={filtersSetters}
               slot={<Button onClick={setCreateForm}>Añadir usuario</Button>}
            />
         ) : (
            <CreateUserForm closeForm={setFilterForm} />
         )}
         <UsersTable users={users} status={status} />
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
