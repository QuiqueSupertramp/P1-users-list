import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersTable = ({ users, status }) => {
   if (status.loading) return <p>Cargando...</p>;
   if (status.ok === false) return <p>{status.errorMessage}</p>;
   if (users.length === 0) return <p>No hay Usuarios</p>;

   return (
      <ul className={style.usersList}>
         {users.map(user => (
            <UserRow
               key={user.id}
               nombre={user.nombre}
               username={user.username}
               rol={user.rol}
               activo={user.activo}
            />
         ))}
      </ul>
   );
};

export default UsersTable;
