import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersTable = ({ users, status, setDeleteForm, setCurrentUser }) => {
   if (status.isLoading) return <p>Cargando...</p>;
   if (status.errorMessage) return <p>{status.errorMessage}</p>;
   if (users.length === 0) return <p>No hay usuarios</p>;

   return (
      <ul className={style.usersTable}>
         {users.map(user => (
            <UserRow
               key={user.id}
               {...user}
               setDeleteForm={setDeleteForm}
               setCurrentUser={setCurrentUser}
            />
         ))}
      </ul>
   );
};

export default UsersTable;
