import getUsers from '@/services/getUsers';
import { useState, useEffect } from 'react';

const initialUsers = {
   users: undefined,
   status: {
      isOk: true,
      isLoading: true,
      errorMessage: '',
   },
};

const useUsers = () => {
   const [usersData, setUsersData] = useState(initialUsers);

   const setUsers = users =>
      setUsersData({
         users,
         status: { isOk: true, isLoading: false, errorMessage: '' },
      });

   const setStatus = status => {
      setUsersData({
         users: undefined,
         status: {
            isLoading: false,
            isOk: status.isOk,
            errorMessage: status.errorMessage,
         },
      });
   };

   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      getUsersList(setUsers, setStatus, signal);
      return () => controller.abort();
   }, []);

   return { usersData };
};

const getUsersList = async (setUsers, setStatus, signal) => {
   const usersData = await getUsers(signal);
   if (usersData === undefined) return;

   const { users, status } = usersData;
   !status.isOk ? setStatus(status) : setUsers(users);
};

export default useUsers;
