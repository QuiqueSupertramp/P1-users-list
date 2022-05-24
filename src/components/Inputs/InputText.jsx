import style from './InputText.module.css';

const InputText = ({ label, error, ...props }) => (
   <label className={style.inputText}>
      <span className={style.label}>{label}</span>
      <input {...props} type='text' className={style.input} />
      <span className={style.error}>{error}</span>
   </label>
);
export default InputText;
