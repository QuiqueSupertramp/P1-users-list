import { createContext } from 'react';
import useUsers from '../hooks/useUsers';

const UsersContext = createContext();

// const steps = 5;

const UsersProvider = ({ children }) => {
   const { usersData } = useUsers();

   const users = usersData.users;
   const status = usersData.status;

   const data = { users, status };

   return (
      <UsersContext.Provider value={data}>{children}</UsersContext.Provider>
   );
};

export { UsersProvider };
export default UsersContext;
