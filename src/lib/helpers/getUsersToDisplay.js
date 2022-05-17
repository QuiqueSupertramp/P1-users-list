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
