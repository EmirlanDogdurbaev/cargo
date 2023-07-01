import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={cl.Navbar}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
