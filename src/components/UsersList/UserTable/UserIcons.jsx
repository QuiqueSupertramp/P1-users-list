import IconButton from '@/components/Buttons/IconButton';
import Pencil from '@/components/icons/Pencil';
import Trash from '@/components/icons/Trash';
import { UsersFormsContext } from '@/lib/contexts/UsersFormsContext';
import { useContext } from 'react';
import style from './UserRow.module.css';

const UserIcons = ({ user }) => {
   const { setEditForm, setDeleteForm } = useContext(UsersFormsContext);

   return (
      <div className={style.icons}>
         <IconButton
            icon={Pencil}
            filled={false}
            className={style.edit}
            onClick={() => setEditForm(user)}
         />
         <IconButton
            icon={Trash}
            filled={false}
            className={style.trash}
            onClick={() => setDeleteForm(user)}
         />
      </div>
   );
};

export default UserIcons;
