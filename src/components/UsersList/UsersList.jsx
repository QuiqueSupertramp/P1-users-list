import style from './UsersList.module.css';
import useUsers from '@/lib/hooks/useUsers';
import useFilters from '@/lib/hooks/useFilters';
import getUsersToDisplay from '@/lib/helpers/getUsersToDisplay';
import UsersTable from './UserTable/UsersTable';
import Pagination from './Pagination/Pagination';
import FormWrapper from '../forms/FormWrapper';
import UsersFormsProvider from '../Providers/UsersFormsProvider';
import UsersFilters from './UsersFilters';

const UsersList = () => {
   const { users, status, reloadUsers } = useUsers();

   const { filters, pagination, filtersSetters, paginationSetters, resetFilters } = useFilters();

   const { paginatedUsers, totalPages } = getUsersToDisplay(users, filters, pagination);

   return (
      <section className={style.usersList}>
         <UsersFormsProvider reloadUsers={reloadUsers} resetFilters={resetFilters}>
            <UsersFilters filters={filters} filtersSetters={filtersSetters} />
            <FormWrapper />
            <UsersTable users={paginatedUsers} status={status} />
         </UsersFormsProvider>

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
