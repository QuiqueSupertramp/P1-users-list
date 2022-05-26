import Pencil from '../icons/Pencil';
import Trash from '../icons/Trash';
import style from './UserRow.module.css';

const Icons = ({ setDeleteForm, id, name, setCurrentUser }) => {
   const handleClick = () => {
      setCurrentUser({ id, name });
      setDeleteForm();
   };
   return (
      <div className={style.icons}>
         <div className={style.edit}>
            <Pencil />
         </div>
         <button className={style.trash} onClick={handleClick}>
            <Trash />
         </button>
      </div>
   );
};

export default Icons;
