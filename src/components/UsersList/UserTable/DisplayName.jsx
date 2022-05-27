import style from './UserRow.module.css';

const DisplayName = ({ name, username }) => {
   return (
      <div className={style.displayName}>
         <p>{name}</p>
         <span>@{username}</span>
      </div>
   );
};

export default DisplayName;
