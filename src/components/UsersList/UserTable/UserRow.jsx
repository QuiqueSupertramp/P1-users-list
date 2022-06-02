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
            <UserStatus isActive={user.active} />
            <UserRol role={user.role} />
            <UserIcons user={user} />
         </div>
      </li>
   );
};

export default UserRow;
