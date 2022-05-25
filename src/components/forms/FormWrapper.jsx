import style from './FormWrapper.module.css';
import IconButton from '../Buttons/IconButton';
import CrossIcon from '../icons/CrossIcon';

const FormWrapper = ({ closeForm, children }) => {
   return (
      <div className={style.wrapper}>
         <IconButton
            className={style.cancelButton}
            icon={CrossIcon}
            onClick={closeForm}
         />
         {children}
      </div>
   );
};

export default FormWrapper;
