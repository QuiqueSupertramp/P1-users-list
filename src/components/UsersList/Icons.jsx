import Pencil from '../icons/Pencil';
import Trash from '../icons/Trash';
import style from './UserRow.module.css';

const Icons = () => {
   return (
      <div className={style.icons}>
         <div className={style.edit}>
            <Pencil />
         </div>
         <div className={style.trash}>
            <Trash />
         </div>
      </div>
   );
};

export default Icons;
