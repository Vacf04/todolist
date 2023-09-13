import Styles from './FormInput.module.css';
import { forwardRef } from 'react';

const FormInput = forwardRef(({handleOnChange, value}, ref) => {
  return(
    <>
      <input 
      type="text" 
      ref={ref} className={Styles.input} 
      onChange={handleOnChange} 
      value={value} 
      />
    </>
  );
});

export default FormInput;