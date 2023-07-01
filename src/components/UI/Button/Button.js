import classes from './Button.module.scss'

const Button = ({ children, action,  color }) => {
  return <button style={{backgroundColor: color}} className={classes.Button} onClick={(e)=>{
    action()
    e.preventDefault();
  }}>{children}</button>;
};

export default Button;
