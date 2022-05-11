import getUsers from '@/services/getUsers';
import { createContext, useEffect } from 'react';
import useUsers from './useUsers';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
   const { users, setUsersList, setIsLoading, setStatus } = useUsers();

   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      getUsersList(setUsersList, setIsLoading, setStatus, signal);
      return () => controller.abort();
   }, []);

   const data = { users };

   return (
      <UsersContext.Provider value={data}>{children}</UsersContext.Provider>
   );
};

const getUsersList = async (setUsersList, setIsLoading, setStatus, signal) => {
   setIsLoading(true);
   const { usersList, status } = await getUsers(signal);
   status.isOk === true ? setUsersList(usersList) : setStatus(status);
   setIsLoading(false);
};

export { UsersProvider };
export default UsersContext;
