import Styles from './Form.module.css';

const Form = ({ handleSubmit , children}) => {
  return(
    <>
      <form 
      onSubmit={handleSubmit} 
      className={Styles.form}
      >
        {children}
      </form>
    </>
  );
};

export default Form;