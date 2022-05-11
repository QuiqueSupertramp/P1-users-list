import { useState } from 'react';

const useFilters = () => {
   const [filters, setFilters] = useState({
      searchValue: '',
      onlyActiveUsers: false,
      sortBy: 'defecto',
   });

   const setSearchValue = searchValue =>
      setFilters({ ...filters, searchValue });
   const setOnlyActiveUsers = onlyActiveUsers =>
      setFilters({ ...filters, onlyActiveUsers });
   const setSortBy = sortBy => setFilters({ ...filters, sortBy });

   return { filters, setSearchValue, setOnlyActiveUsers, setSortBy };
};

export default useFilters;
