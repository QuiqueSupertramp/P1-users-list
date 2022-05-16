import UsersContext from '@/context/usersContext';
import useFilters from '@/hooks/useFilters';
import { useContext, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import UsersFilters from '../UsersFilters/UsersFilters';
import UsersTable from './UsersTable';
import style from './UsersList.module.css';

const UsersList = () => {
   const { users, status } = useContext(UsersContext);
   const [currentPage, setCurrentPage] = useState(1);
   const [steps, setSteps] = useState(6);

   const { filters, setSearchValue, setOnlyActiveUsers, setSortBy } =
      useFilters(setCurrentPage);

   const usersFiltered = filterUsers(users, filters) || [];

   const totalPages = Math.ceil(usersFiltered.length / steps);

   const paginatedUsers =
      paginateUsers(usersFiltered, currentPage, steps) || [];

   return (
      <section className={style.usersList}>
         <UsersFilters
            setSearchValue={setSearchValue}
            setActiveFilter={setOnlyActiveUsers}
            setSortBy={setSortBy}
            filters={filters}
         />
         <UsersTable users={paginatedUsers} status={status} />
         {usersFiltered?.length >= 1 && (
            <Pagination
               totalPages={totalPages}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
               steps={steps}
               setSteps={setSteps}
            />
         )}
      </section>
   );
};

// Filter Functions ------------------------>
const normalizeName = string =>
   string
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

const filterUsersBySearch = (users, searchValue) => {
   if (searchValue.lenght === 0) return users;

   return users.filter(user =>
      normalizeName(user.nombre).includes(normalizeName(searchValue))
   );
};

const filterUsersByActive = (users, onlyActiveUsers) => {
   if (!onlyActiveUsers) return users;
   return users.filter(user => user.activo === true);
};

const sortUsers = (users, sortBy) => {
   switch (sortBy) {
      case 'rol':
         return users.sort((a, b) => {
            if (a.rol === b.rol) return 0;
            if (a.rol === 'Profesor') return -1;
            if (a.rol === 'Alumno' && b.rol === 'Otro') return -1;
            return 1;
         });

      case 'activos':
         return users.sort(a => (a.activo === true ? -1 : 1));

      case 'alfabeticamente': {
         return users.sort((a, b) => {
            if (normalizeName(a.nombre) < normalizeName(b.nombre)) return -1;
            return 1;
         });
      }

      default:
         return users;
   }
};

const paginateUsers = (usersFiltered, currentPage, steps) =>
   usersFiltered.slice(
      Number(currentPage - 1) * Number(steps),
      Number(currentPage - 1) * Number(steps) + Number(steps)
   );

const filterUsers = (users, filters) => {
   if (!users) return [];
   let usersFiltered = filterUsersByActive(users, filters.onlyActiveUsers);
   usersFiltered = filterUsersBySearch(usersFiltered, filters.searchValue);
   return (usersFiltered = sortUsers(usersFiltered, filters.sortBy));
};

export default UsersList;
