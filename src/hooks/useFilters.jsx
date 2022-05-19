import { useState } from 'react';

const useFilters = () => {
   const [filterParams, setFilterParams] = useState({
      searchValue: '',
      onlyActiveUsers: false,
      sortBy: 'defecto',
      currentPage: 1,
      steps: 6,
   });

   // Pagination Setters
   const setCurrentPage = currentPage =>
      setFilterParams({ ...filterParams, currentPage });
   const setSteps = steps =>
      setFilterParams({ ...filterParams, steps, currentPage: 1 });

   // Filters Setters
   const setSearchValue = searchValue => {
      setFilterParams({ ...filterParams, searchValue, currentPage: 1 });
   };
   const setOnlyActiveUsers = onlyActiveUsers => {
      setFilterParams({ ...filterParams, onlyActiveUsers, currentPage: 1 });
   };
   const setSortBy = sortBy => {
      setFilterParams({ ...filterParams, sortBy, currentPage: 1 });
   };

   const filters = {
      searchValue: filterParams.searchValue,
      onlyActiveUsers: filterParams.onlyActiveUsers,
      sortBy: filterParams.sortBy,
   };
   const pagination = {
      currentPage: filterParams.currentPage,
      steps: filterParams.steps,
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
