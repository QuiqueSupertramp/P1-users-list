import style from './UserRow.module.css';

const DisplayName = ({ nombre, username }) => {
   return (
      <div className={style.displayName}>
         <p>{nombre}</p>
         <span>@{username}</span>
      </div>
   );
};

export default DisplayName;
