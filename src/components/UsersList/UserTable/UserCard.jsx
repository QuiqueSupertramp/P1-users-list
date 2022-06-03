import DisplayName from './DisplayName';
import UserIcons from './UserIcons';
import UserRol from './UserRol';
import UserStatus from './UserStatus';
import style from './UserCard.module.css';

const UserRow = ({ user }) => {
   return (
      <li className={style.userCard}>
         <div className={style.display}>
            <DisplayName name={user.name} username={user.username} />
         </div>
         <div className={style.info}>
            <UserRol role={user.role} className={style.role} />
            <UserStatus isActive={user.active} className={style.status} />
            <UserIcons user={user} />
         </div>
      </li>
   );
};

export default UserRow;
