import CheckCircle from '@/components/icons/CheckCircle';
import CrossCircle from '@/components/icons/CrossCircle';
import style from './UserRow.module.css';

const UserStatus = ({ isActive }) => {
   const activeClass = isActive === true ? style.active : style.inactive;
   const IsActiveIcon = isActive === true ? CheckCircle : CrossCircle;
   const activeText = isActive === true ? 'Activo' : 'Inactivo';

   return (
      <div className={style.status}>
         <div className={activeClass}>
            <IsActiveIcon />
            <span>{activeText}</span>
         </div>
      </div>
   );
};

export default UserStatus;
