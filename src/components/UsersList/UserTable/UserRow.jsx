import DisplayName from './DisplayName';
import UserIcons from './UserIcons';
import UserRol from './UserRol';
import UserStatus from './UserStatus';
import style from './UserRow.module.css';

const UserRow = ({ user }) => {
   return (
      <li className={style.userRow}>
         <div className={style.display}>
            <DisplayName name={user.name} username={user.username} />
         </div>
         <div className={style.info}>
            <UserStatus isActive={user.active} className={style.status} />
            <UserRol role={user.role} className={style.role} />
            <UserIcons user={user} />
         </div>
      </li>
   );
};

export default UserRow;
