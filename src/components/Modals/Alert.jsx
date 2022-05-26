import style from './Alert.module.css';

const KINDS = {
   success: style.success,
   error: style.error,
   info: style.info,
};

const Alert = ({ text, kind }) => {
   return (
      <div className={`${style.alert} ${KINDS[kind]}`}>
         <p>{text}</p>
      </div>
   );
};

export default Alert;
