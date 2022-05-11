import { useState } from 'react';

const initialUsers = {
   usersList: undefined,
   status: {
      isOk: true,
      isLoading: true,
      errorMessage: '',
   },
};

const useUsers = () => {
   const [users, setUsers] = useState(initialUsers);

   const setUsersList = usersList =>
      setUsers(prevUsers => ({ ...prevUsers, usersList }));

   const setIsLoading = isLoading => {
      setUsers(prevUsers => ({
         ...prevUsers,
         status: { ...users.status, isLoading },
      }));
   };

   const setStatus = status => {
      setUsers(prevUsers => ({
         ...prevUsers,
         status: {
            ...users.status,
            isOk: status.isOk,
            errorMessage: status.errorMessage,
         },
      }));
   };
   return { users, setUsersList, setIsLoading, setStatus };
};

export default useUsers;
