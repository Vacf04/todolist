import Styles from './FormSubmit.module.css';
import { FaPlus, FaCheck  } from "react-icons/fa";

const FormSubmit = ({ edit }) => {
  return(
    <>
      <button 
      type="submit" 
      className={Styles.submitButton}>{edit ? <FaCheck /> : <FaPlus  /> }
      </button>
    </>
  );
};

export default FormSubmit;