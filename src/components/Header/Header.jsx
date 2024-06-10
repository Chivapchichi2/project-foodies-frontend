import styles from "./Header.module.css";
import stylesFromFooter from "../Footer/Footer.module.css";
import cx from "classnames";
// import AuthToggle from "../shared/AuthToggle/AuthToggle";
import HeaderProfile from "./HeaderProfile";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const styleWhite = isHome && styles.color_white
  return (
    <header className={styles.header_wrap}>
      <a className={cx(stylesFromFooter.logo, styleWhite)} href="/" aria-label="Logo Foodies">
        <p>Foodies</p>
      </a>
      <nav className={styles.navigation}>
        <ul className={styles.wrap_navigation}>
          <li>
            <NavLink to="/" className={cx(styles.link, styleWhite)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/recipe/add" className={cx(styles.link, styleWhite)}>
              Add recipe
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <AuthToggle /> */}
      <HeaderProfile colorWhite={isHome} />
    </header>
  );
};

export default Header;
