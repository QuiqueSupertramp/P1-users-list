import { getUsersToDisplay } from '@/lib/helpers/getUsersToDisplay';
import getUsers from '@/services/getUsers';
import { useState, useEffect } from 'react';

const initialUsers = {
   users: undefined,
   status: {
      isLoading: true,
      errorMessage: '',
   },
};

const useUsers = (filters, pagination) => {
   const [usersData, setUsersData] = useState(initialUsers);

   const setUsers = users =>
      setUsersData({
         users,
         status: { isLoading: false, errorMessage: '' },
      });

   const setStatus = errorMessage => {
      setUsersData({
         users: [],
         status: {
            isLoading: false,
            errorMessage,
         },
      });
   };

   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      fetchUsersData(setUsers, setStatus, signal);
      return () => controller.abort();
   }, []);

   const { users, totalPages } = getUsersToDisplay(
      usersData.users,
      filters,
      pagination
   );

   return { users, status: usersData.status, totalPages };
};

// Fetch users from API ------------------->
const fetchUsersData = async (setUsers, setStatus, signal) => {
   const usersData = await getUsers(signal);
   if (usersData === undefined) return;
   const { users, status } = usersData;
   !status.isOk ? setStatus(status.errorMessage) : setUsers(users);
};

export default useUsers;
