import UserRow from './UserRow';
import style from './UsersTable.module.css';

const UsersTable = ({ users, status }) => {
   if (status.isLoading) return <p>Cargando...</p>;
   if (status.errorMessage) return <p>{status.errorMessage}</p>;
   if (users.length === 0) return <p>No hay usuarios</p>;

   return (
      <ul className={style.usersTable}>
         {users.map(user => (
            <UserRow key={user.id} user={user} />
         ))}
      </ul>
   );
};

export default UsersTable;
