import { USER_ROLES } from '@/lib/constants/roles';
import style from './UserRow.module.css';

const ROLES_LIST = {
   [USER_ROLES.TEACHER]: ['Profesor', style.profesor],
   [USER_ROLES.STUDENT]: ['Alumno', style.alumno],
   [USER_ROLES.OTHER]: ['Otro', style.otro],
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
