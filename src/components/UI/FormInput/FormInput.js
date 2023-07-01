import { useState } from 'react';
import classes from './FormInput.module.scss'

const FormInput = ({type, title, set}) => {
    const [filled, setFilled]= useState(true)
    return ( <div className={classes.FormInput}>
    <input onInput={(e)=>{
        set(e.target.value);
        if(e.target.value.length>1){
            setFilled(false)
        }
        else{
            setFilled(true)
        }
    }} className={classes.input} type={type} id={title}/>
   {filled? <label className={classes.label} htmlFor={title}>{title}</label>:null}

    </div> );
}
 
export default FormInput;