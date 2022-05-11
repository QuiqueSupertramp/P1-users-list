import getUsers from '@/services/getUsers';
import { createContext, useState, useEffect } from 'react';

const UsersContext = createContext();

const initialUsers = {
   users: [],
   status: {
      ok: true,
      loading: true,
      errorMessage: '',
   },
};

const UsersProvider = ({ children }) => {
   const [users, setUsers] = useState(initialUsers);

   const getUsersList = async () => {
      const usersList = await getUsers();
      setUsers(usersList);
   };

   useEffect(() => {
      getUsersList();
   }, []);

   const data = { users };

   return (
      <UsersContext.Provider value={data}>{children}</UsersContext.Provider>
   );
};

export { UsersProvider };
export default UsersContext;
