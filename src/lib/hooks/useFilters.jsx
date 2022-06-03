import { useState } from 'react';
import PAGINATION from '../constants/pagination';
import SELECT_OPTIONS from '../constants/selectOptions';

const initialFilters = {
   searchValue: '',
   onlyActiveUsers: false,
   sortBy: SELECT_OPTIONS.DEFAULT,
   currentPage: PAGINATION.INTIAL_PAGE,
   steps: PAGINATION.DEFAULT_STEPS,
};

const useFilters = () => {
   const [filterParams, setFilterParams] = useState(initialFilters);

   // Pagination Setters
   const setCurrentPage = currentPage => setFilterParams({ ...filterParams, currentPage });
   const setSteps = steps => setFilterParams({ ...filterParams, steps, currentPage: 1 });

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

   const resetFilters = () => setFilterParams(initialFilters);

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
      resetFilters,
   };
};

export default useFilters;
