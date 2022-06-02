import CheckCircle from '../icons/CheckCircle';
import CrossCircle from '../icons/CrossCircle';
import Update from '../icons/Update';
import style from './InputTextAsync.module.css';

const InputTextAsync = ({ label, error, isLoading, ...props }) => {
   const icon = getIcon(error, isLoading);
   return (
      <label className={style.inputText}>
         <span className={style.label}>{label}</span>
         <div className={style.inputWrapper}>
            <input {...props} type='text' className={style.input} />
            {icon}
         </div>
         <span className={style.error}>{error}</span>
      </label>
   );
};

const getIcon = (error, isLoading) => {
   if (isLoading === true) return <Update className={style.loadingIcon} />;
   if (!isLoading && error) return <CrossCircle className={style.errorIcon} />;
   if (!isLoading && error === false) return <CheckCircle className={style.successIcon} />;
};

export default InputTextAsync;
