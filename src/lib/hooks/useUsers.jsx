import getUsers from '@/lib/services/getUsers';
import { useState, useEffect } from 'react';

const initialUsers = {
   users: undefined,
   status: {
      isLoading: true,
      errorMessage: '',
   },
};

const useUsers = () => {
   const [usersData, setUsersData] = useState(initialUsers);

   const setUsers = users =>
      setUsersData({
         users,
         status: { isLoading: false, errorMessage: '' },
      });

   const setErrorMessage = errorMessage => {
      setUsersData({
         users: [],
         status: { isLoading: false, errorMessage },
      });
   };

   const reloadUsers = () => {
      setUsersData({
         users: [],
         status: { isLoading: true, errorMessage: '' },
      });
   };

   useEffect(() => {
      if (usersData.status.isLoading) {
         const controller = new AbortController();
         const signal = controller.signal;
         fetchUsersData(setUsers, setErrorMessage, signal);
         return () => controller.abort();
      }
   }, [usersData.status.isLoading]);

   return { users: usersData.users, status: usersData.status, reloadUsers };
};

// Fetch users from API ------------------->
const fetchUsersData = async (setUsers, setErrorMessage, signal) => {
   const { users, status } = await getUsers(signal);
   if (status.aborted) return;
   !status.isOk ? setErrorMessage(status.errorMessage) : setUsers(users);
};

export default useUsers;
