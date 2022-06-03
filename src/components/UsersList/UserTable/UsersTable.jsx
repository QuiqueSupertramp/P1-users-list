import UserRow from './UserRow';
import UserCard from './UserCard';
import style from './UsersTable.module.css';
import UserViewSelector from '../UserViewSelector';
import { useState } from 'react';

const UsersTable = ({ users, status }) => {
   const [showByRows, setShowByRows] = useState(true);

   if (status.isLoading) return <p>Cargando...</p>;
   if (status.errorMessage) return <p>{status.errorMessage}</p>;
   if (users.length === 0) return <p>No hay usuarios</p>;

   const UserShow = showByRows ? UserRow : UserCard;

   return (
      <>
         <UserViewSelector showByRows={showByRows} setShowByRows={setShowByRows} />
         <ul className={showByRows ? style.usersRows : style.usersCards}>
            {users.map(user => (
               <UserShow key={user.id} user={user} />
            ))}
         </ul>
      </>
   );
};

export default UsersTable;
