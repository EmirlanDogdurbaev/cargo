import { useDispatch } from "react-redux";
import classes from "./AuthForm.module.scss";
import { signin } from "../../store/AuthSlice";
import { useState } from "react";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Access the navigate function

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    try {
      dispatch(signin({ username, password }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={classes.AuthForm}>
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <input
        onInput={(e) => setUsername(e.target.value)}
        type="text"
        id="username"
      />
      <label htmlFor="password">Password</label>
      <input
        onInput={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
      />
      <Button action={handleSubmit}>Submit</Button>
    </form>
  );
};

export default LoginForm;
