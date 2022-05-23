import Check from '../icons/Check';
import style from './Checkbox.module.css';

const Checkbox = ({ className = '', label, ...props }) => {
   return (
      <label className={style.active}>
         <div className={`${style.checkbox} ${className}`}>
            <input {...props} type='checkbox' className={style.input} />
            <Check className={style.icon} />
         </div>
         <span>{label}</span>
      </label>
   );
};

export default Checkbox;
