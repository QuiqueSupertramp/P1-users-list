import { createPortal } from 'react-dom';
import style from './UsersList.module.css';
import useUsers from '@/hooks/useUsers';
import useForms from '@/hooks/useForms';
import useFilters from '@/hooks/useFilters';
import Pagination from '../Pagination/Pagination';
import UsersTable from './UsersTable';
import Alert from '../Modals/Alert';
import { getUsersToDisplay } from '@/lib/helpers/getUsersToDisplay';
import useAlert from '@/hooks/useAlert';
import Header from '../Header/Header';
import { useState } from 'react';

const UsersList = () => {
   const [currentUser, setCurrentUser] = useState({ id: '', name: '' });
   const { users, status, reloadUsers } = useUsers();
   const { currentForm, setFilterForm, setCreateForm, setDeleteForm } =
      useForms();
   const { alert, setSuccessAlert, setErrorAlert, setDeleteSuccesAlert } =
      useAlert();
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
      // CerrarFormulario
      setFilterForm();
      // RecargarUsuarios
      reloadUsers();
      // Resetear filtros
      resetFilters();
      // Resetear currentUser
      setCurrentUser({ id: '', name: '' });
      // Activar alerta
      setDeleteSuccesAlert();
   };

   const onSuccess = () => {
      setFilterForm();
      reloadUsers();
      resetFilters();
      setSuccessAlert();
   };

   return (
      <section className={style.usersList}>
         <Header
            filters={filters}
            filtersSetters={filtersSetters}
            onSuccess={onSuccess}
            setErrorAlert={setErrorAlert}
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
         {alert.kind &&
            createPortal(
               <Alert text={alert.text} kind={alert.kind} />,
               document.getElementById('alerts')
            )}
      </section>
   );
};

export default UsersList;
