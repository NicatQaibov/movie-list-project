import { NavLink, useLocation } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>MustSee</div>
      <div className={classes.links}>
        {isHomePage ? (
          <NavLink to="/collection">Collections</NavLink>
        ) : (
          <NavLink to="/">Home</NavLink>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
