import style from './UsersList.module.css';
import useUsers from '@/hooks/useUsers';
import useForms from '@/hooks/useForms';
import useFilters from '@/hooks/useFilters';
import Pagination from '../Pagination/Pagination';
import UsersTable from './UsersTable';
import { getUsersToDisplay } from '@/lib/helpers/getUsersToDisplay';
import Header from '../Header/Header';
import { useState } from 'react';

const UsersList = () => {
   const [currentUser, setCurrentUser] = useState({ id: '', name: '' });
   const { users, status, reloadUsers } = useUsers();
   const { currentForm, setFilterForm, setCreateForm, setDeleteForm } =
      useForms();

   const {
      filters,
      pagination,
      filtersSetters,
      paginationSetters,
      resetFilters,
   } = useFilters();

   const { paginatedUsers, totalPages } = getUsersToDisplay(
      users,
      filters,
      pagination
   );

   const onDeleteSuccess = () => {
      setFilterForm();
      reloadUsers();
      resetFilters();
      setCurrentUser({ id: '', name: '' });
   };

   const onSuccess = () => {
      setFilterForm();
      reloadUsers();
      resetFilters();
   };

   return (
      <section className={style.usersList}>
         <Header
            filters={filters}
            filtersSetters={filtersSetters}
            onSuccess={onSuccess}
            currentForm={currentForm}
            setFilterForm={setFilterForm}
            setCreateForm={setCreateForm}
            currentUser={currentUser}
            onDeleteSuccess={onDeleteSuccess}
         />

         <UsersTable
            users={paginatedUsers}
            status={status}
            setDeleteForm={setDeleteForm}
            setCurrentUser={setCurrentUser}
         />
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
