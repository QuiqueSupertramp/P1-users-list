import DisplayName from './DisplayName';
import Icons from './Icons';
import Rol from './Rol';
import Status from './Status';
import style from './UserRow.module.css';

const UserRow = ({ nombre, username, rol, activo }) => {
   return (
      <li className={style.userRow}>
         <div className={style.display}>
            <DisplayName nombre={nombre} username={username} />
         </div>
         <div className={style.info}>
            <Status isActive={activo} />
            <Rol rol={rol} />
            <Icons />
         </div>
      </li>
   );
};

export default UserRow;
