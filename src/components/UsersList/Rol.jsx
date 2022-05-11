import style from './UserRow.module.css';

const ROLES = {
   Profesor: ['Profesor', style.profesor],
   Alumno: ['Alumno', style.alumno],
   Otro: ['Otro', style.otro],
};

const Rol = ({ rol }) => {
   const [rolName, rolClass] = ROLES[rol];

   return (
      <div className={style.rol}>
         <div className={`${style.rolContainer} ${rolClass}`}>
            <span>{rolName}</span>
         </div>
      </div>
   );
};

export default Rol;
