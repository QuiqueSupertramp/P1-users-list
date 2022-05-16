import style from './BtnIcon.module.css';

const BtnIcon = ({ Icon, ...props }) => {
   return (
      <button {...props} className={style.btn}>
         <Icon className={style.icon} />
      </button>
   );
};

export default BtnIcon;
