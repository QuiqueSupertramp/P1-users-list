import UsersContext from '@/context/usersContext';
import useFilters from '@/hooks/useFilters';
import { useContext } from 'react';
import UsersFilters from '../UsersFilters/UsersFilters';
import UsersTable from './UsersTable';

const UsersList = () => {
   const { users } = useContext(UsersContext);

   const { filters, setSearchValue, setOnlyActiveUsers, setSortBy } =
      useFilters();

   const usersFiltered = filterUsers(users?.usersList, filters) || [];

   return (
      <section>
         <UsersFilters
            setSearchValue={setSearchValue}
            setActiveFilter={setOnlyActiveUsers}
            setSortBy={setSortBy}
            filters={filters}
         />
         <UsersTable users={usersFiltered} status={users.status} />
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
         return users.sort(a => {
            if (a.rol === 'Profesor') return -1;
            if (a.rol === 'Alumno') return 1;
            return 0;
         });

      case 'activos':
         return users.sort(a => {
            if (a.activo === true) return -1;
            return 1;
         });

      case 'alfabeticamente': {
         return users.sort((a, b) => {
            if (a.nombre < b.nombre) return -1;
            return 1;
         });
      }

      default:
         return users;
   }
};

const filterUsers = (users, filters) => {
   if (!users) return [];
   let usersFiltered = filterUsersByActive(users, filters.onlyActiveUsers);
   usersFiltered = filterUsersBySearch(usersFiltered, filters.searchValue);
   return (usersFiltered = sortUsers(usersFiltered, filters.sortBy));
};

export default UsersList;
