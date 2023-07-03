import { useHref, useParams } from "react-router-dom";
import LoginForm from "../../components/AuthForm/LoginForm";
import classes from './Login.module.scss'
import RegisterForm from "../../components/AuthForm/RegisterForm";
const Auth = ({type}) => {
    const url = useParams()
    console.log(url.user);
    return ( <div className={classes.Login}>
        {type==='login'?
        <LoginForm/>:
        <RegisterForm user={url.user}/>}
    </div> );
}
 
export default Auth;