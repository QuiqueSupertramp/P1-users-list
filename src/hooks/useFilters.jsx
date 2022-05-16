import { useState } from 'react';

const useFilters = setCurrentPage => {
   const [filters, setFilters] = useState({
      searchValue: '',
      onlyActiveUsers: false,
      sortBy: 'defecto',
   });

   const setSearchValue = searchValue => {
      setFilters({ ...filters, searchValue });
      setCurrentPage(1);
   };
   const setOnlyActiveUsers = onlyActiveUsers => {
      setFilters({ ...filters, onlyActiveUsers });
      setCurrentPage(1);
   };
   const setSortBy = sortBy => {
      setFilters({ ...filters, sortBy });
      setCurrentPage(1);
   };

   return { filters, setSearchValue, setOnlyActiveUsers, setSortBy };
};

export default useFilters;
