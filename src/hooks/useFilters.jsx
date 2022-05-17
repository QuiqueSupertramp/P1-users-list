import { useState } from 'react';

const useFilters = () => {
   const [filters, setFilters] = useState({
      searchValue: '',
      onlyActiveUsers: false,
      sortBy: 'defecto',
   });

   const [pagination, setPagination] = useState({
      currentPage: 1,
      steps: 6,
   });

   // Pagination Setters
   const setCurrentPage = currentPage =>
      setPagination({ ...pagination, currentPage });
   const setSteps = steps => setPagination({ ...pagination, steps });

   // Filters Setters
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

   const paginationSetters = { setCurrentPage, setSteps };
   const filtersSetters = { setSearchValue, setOnlyActiveUsers, setSortBy };

   return {
      filters,
      pagination,
      filtersSetters,
      paginationSetters,
   };
};

export default useFilters;
