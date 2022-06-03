import { USER_ROLES } from '@/lib/constants/roles';
import style from './UserRow.module.css';

const ROLES_LIST = {
   [USER_ROLES.TEACHER]: ['Profesor', style.profesor],
   [USER_ROLES.STUDENT]: ['Alumno', style.alumno],
   [USER_ROLES.OTHER]: ['Otro', style.otro],
};

const UserRol = ({ role, className = '' }) => {
   const [roleName, roleClass] = ROLES_LIST[role];

   return (
      <div className={className}>
         <div className={`${style.roleContainer} ${roleClass}`}>
            <span>{roleName}</span>
         </div>
      </div>
   );
};

export default UserRol;
