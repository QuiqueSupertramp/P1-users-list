import style from './IconButton.module.css';

const IconButton = ({
   icon: Icon,
   filled = true,
   className = '',
   ...props
}) => {
   const isFilled = filled ? style.filled : style.normal;
   return (
      <button {...props} className={`${style.btn} ${isFilled} ${className}`}>
         <Icon className={style.icon} />
      </button>
   );
};

export default IconButton;
