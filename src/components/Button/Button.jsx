import style from './Button.module.css';

const Button = ({ text, filled = true, ...props }) => {
   const isFilled = filled ? style.filled : style.normal;

   return (
      <button {...props} className={`${style.btn} ${isFilled}`}>
         {text}
      </button>
   );
};

export default Button;
