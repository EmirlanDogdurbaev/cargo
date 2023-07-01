import { NavLink } from "react-router-dom";
import burger from "../../../../assets/icons/burger.svg";
import classes from "./NavLinks.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../store/AuthSlice";

const NavLinks = ({ pages, drawer = false, open, close, openModal }) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  function logoutHandler() {
    dispatch(logout());
  }
  return (
    <ul className={classes.NavLinks}>
      {pages ? (
        <>
          <li
            className={`${classes.pagesLink} ${
              drawer ? classes.drawerLink : null
            }`}
          >
            <NavLink onClick={close} to="/">
              Home
            </NavLink>
          </li>
          <li
            className={`${classes.pagesLink} ${
              drawer ? classes.drawerLink : null
            }`}
          >
            <NavLink onClick={close} to="/profile">
              Profile
            </NavLink>
          </li>
          <li
            className={`${classes.pagesLink} ${
              drawer ? classes.drawerLink : null
            }`}
          >
            <NavLink onClick={close} to="/institution">
              Jobs
            </NavLink>
          </li>
          <li onClick={() => openModal("login")} className={classes.login}>
            <span>Войти</span>
          </li>
          <li
            onClick={() => openModal("register")}
            className={classes.register}
          >
            <span>Регистрация</span>
          </li>
        </>
      ) : (
        <>
          {!token ? (
            <>
              <li onClick={() => openModal("login")} className={classes.login}>
                <span>Войти</span>
              </li>
              <li
                onClick={() => openModal("register")}
                className={classes.register}
              >
                <span>Регистрация</span>
              </li>
            </>
          ) : (
            <li onClick={logoutHandler} className={classes.logout}>
              <span>Выйти</span>
            </li>
          )}
          <li className={classes.burger} onClick={open}>
            <img src={burger} alt="burger" />
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
