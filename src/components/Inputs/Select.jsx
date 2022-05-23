import DownArrow from '../icons/DownArrow';
import style from './Select.module.css';

const Select = ({ className, ...props }) => (
   <div className={`${style.wrapper} ${className}`}>
      <select {...props} className={style.select}></select>
      <DownArrow className={style.icon} />
   </div>
);

export default Select;
