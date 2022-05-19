import DisplayName from './DisplayName';
import Icons from './Icons';
import Rol from './Rol';
import Status from './Status';
import style from './UserRow.module.css';

const UserRow = ({ name, username, role, active }) => {
   return (
      <li className={style.userRow}>
         <div className={style.display}>
            <DisplayName name={name} username={username} />
         </div>
         <div className={style.info}>
            <Status isActive={active} />
            <Rol role={role} />
            <Icons />
         </div>
      </li>
   );
};

export default UserRow;
