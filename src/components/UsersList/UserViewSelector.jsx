import IconButton from '../Buttons/IconButton';
import GridView from '../icons/GridView';
import ListView from '../icons/ListView';
import style from './UserViewSelector.module.css';

const UserViewSelector = ({ showByRows, setShowByRows }) => {
   return (
      <div className={style.selector}>
         <IconButton
            icon={GridView}
            filled={false}
            className={style.gridIcon}
            disabled={!showByRows}
            onClick={() => setShowByRows(false)}
         />
         <div className={style.divider}></div>
         <IconButton
            icon={ListView}
            filled={false}
            className={style.listIcon}
            disabled={showByRows}
            onClick={() => setShowByRows(true)}
         />
      </div>
   );
};

export default UserViewSelector;
