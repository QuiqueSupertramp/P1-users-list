import style from './UserRow.module.css';
import CheckCircle from '../icons/CheckCircle';
import CrossCircle from '../icons/CrossCircle';

const Status = ({ isActive }) => {
   const activeClass = isActive === true ? style.active : style.inactive;
   const activeIcon = isActive === true ? <CheckCircle /> : <CrossCircle />;
   const activeText = isActive === true ? 'Activo' : 'Inactivo';

   return (
      <div className={style.status}>
         <div className={activeClass}>
            {activeIcon}
            <span>{activeText}</span>
         </div>
      </div>
   );
};

export default Status;
