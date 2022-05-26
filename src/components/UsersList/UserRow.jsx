import DisplayName from './DisplayName';
import Icons from './Icons';
import Rol from './Rol';
import Status from './Status';
import style from './UserRow.module.css';

const UserRow = ({
   id,
   name,
   username,
   role,
   active,
   setDeleteForm,
   setCurrentUser,
}) => {
   return (
      <li className={style.userRow}>
         <div className={style.display}>
            <DisplayName name={name} username={username} />
         </div>
         <div className={style.info}>
            <Status isActive={active} />
            <Rol role={role} />
            <Icons
               setDeleteForm={setDeleteForm}
               name={name}
               id={id}
               setCurrentUser={setCurrentUser}
            />
         </div>
      </li>
   );
};

export default UserRow;
