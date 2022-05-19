import { ROLES } from '../constants/roles';
import { SELECT_OPTIONS } from '../constants/selectOptions';

// Filter Functions ------------------------>
const normalizeName = string =>
   string
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

const filterUsersBySearch = (users, searchValue) => {
   if (searchValue.lenght === 0) return users;

   return users.filter(user =>
      normalizeName(user.name).includes(normalizeName(searchValue))
   );
};

const filterUsersByActive = (users, onlyActiveUsers) => {
   if (!onlyActiveUsers) return users;
   return users.filter(user => user.active === true);
};

const sortUsers = (users, sortBy) => {
   switch (sortBy) {
      case SELECT_OPTIONS.ROLE:
         return users.sort((a, b) => {
            if (a.role === b.role) return 0;
            if (a.role === ROLES.PROFESOR) return -1;
            if (a.role === ROLES.ALUMNO && b.role === ROLES.OTRO) return -1;
            return 1;
         });

      case SELECT_OPTIONS.ACTIVE:
         return users.sort(a => (a.active === true ? -1 : 1));

      case SELECT_OPTIONS.NAME: {
         return users.sort((a, b) => {
            if (normalizeName(a.name) > normalizeName(b.name)) return 1;
            if (normalizeName(a.name) < normalizeName(b.name)) return -1;
            return 0;
         });
      }

      default:
         return users;
   }
};

const filterUsers = (users, filters) => {
   if (!users) return [];
   if (!filters) return users;

   let usersFiltered = filterUsersByActive(users, filters.onlyActiveUsers);
   usersFiltered = filterUsersBySearch(usersFiltered, filters.searchValue);
   return (usersFiltered = sortUsers(usersFiltered, filters.sortBy));
};

// Pagination functions ---------------------->
const paginateUsers = (usersFiltered, pagination) => {
   const { currentPage, steps } = pagination;

   const totalPages = Math.ceil(usersFiltered.length / steps);
   const paginatedUsers = usersFiltered.slice(
      Number(currentPage - 1) * Number(steps),
      Number(currentPage - 1) * Number(steps) + Number(steps)
   );

   return { paginatedUsers, totalPages };
};

// Users to display
export const getUsersToDisplay = (users, filters, pagination) => {
   const usersFiltered = filterUsers(users, filters);

   const { paginatedUsers, totalPages } = paginateUsers(
      usersFiltered,
      pagination
   );

   return { users: paginatedUsers, totalPages };
};
