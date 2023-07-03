import { NavLink } from "react-router-dom";
import burger from "../../../../assets/icons/burger.svg";
import classes from "./NavLinks.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../store/AuthSlice";
import { useEffect, useState } from "react";


const NavLinks = ({ pages, drawer = false, open, close, openModal }) => {
  const token = localStorage.getItem("token")

  function logoutHandler() {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    window.location.reload();
    
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
            <NavLink onClick={close} to="/jobs">
              Jobs
            </NavLink>
          </li>
          {!token ? (
            <>
              <li className={classes.login}>
                <NavLink to={'login'}>Войти</NavLink>
              </li>
              <li
                className={classes.register}
              >
                <NavLink to={'register/shipper'}>Регистрация</NavLink>
              </li>
            </>
          ) : (
            <li onClick={logoutHandler} className={classes.logout}>
              <span>Выйти</span>
            </li>
          )}
        </>
      ) : (
        <>
          {!token ? (
            <>
              <li className={classes.login}>
                <NavLink to={'login'}>Войти</NavLink>
              </li>
              <li
                className={classes.register}
              >
                <NavLink to={'register/shipper'}>Регистрация</NavLink>
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
