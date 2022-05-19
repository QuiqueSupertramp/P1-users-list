import { ROLES } from '@/lib/constants/roles';
import style from './UserRow.module.css';

const ROLES_LIST = {
   teacher: [ROLES.PROFESOR, style.profesor],
   student: [ROLES.ALUMNO, style.alumno],
   other: [ROLES.OTRO, style.otro],
};

const Rol = ({ role }) => {
   const [rolName, rolClass] = ROLES_LIST[role];

   return (
      <div className={style.rol}>
         <div className={`${style.rolContainer} ${rolClass}`}>
            <span>{rolName}</span>
         </div>
      </div>
   );
};

export default Rol;
