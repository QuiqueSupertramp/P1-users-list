import style from './Button.module.css';

const Button = ({ filled = true, className = '', ...props }) => {
   const isFilled = filled ? style.filled : style.normal;

   return <button {...props} className={`${style.btn} ${isFilled} ${className}`}></button>;
};

export default Button;
