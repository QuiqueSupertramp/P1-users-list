import style from './Button.module.css';

const Button = ({ text, filled = true, className = '', ...props }) => {
   const isFilled = filled ? style.filled : style.normal;

   return (
      <button {...props} className={`${style.btn} ${isFilled} ${className}`}>
         {text}
      </button>
   );
};

export default Button;
