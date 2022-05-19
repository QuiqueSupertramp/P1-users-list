import useFilters from '@/hooks/useFilters';
import Pagination from '../Pagination/Pagination';
import UsersFilters from '../UsersFilters/UsersFilters';
import UsersTable from './UsersTable';
import style from './UsersList.module.css';
import useUsers from '@/hooks/useUsers';

const UsersList = () => {
   const { filters, pagination, filtersSetters, paginationSetters } =
      useFilters();
   const { users, status, totalPages } = useUsers(filters, pagination);

   return (
      <section className={style.usersList}>
         <UsersFilters filters={filters} filtersSetters={filtersSetters} />
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
