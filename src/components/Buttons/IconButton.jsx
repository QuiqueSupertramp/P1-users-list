import style from './IconButton.module.css';

const IconButton = ({ Icon, filled = true, ...props }) => {
   const isFilled = filled ? style.filled : style.normal;
   return (
      <button {...props} className={`${style.btn} ${isFilled}`}>
         <Icon className={style.icon} />
      </button>
   );
};

export default IconButton;