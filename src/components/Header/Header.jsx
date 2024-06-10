import styles from "./Header.module.css";
import stylesFromFooter from "../Footer/Footer.module.css";
import cx from "classnames";
import {useSelector} from "react-redux";
import {selectToken} from "../../store/features/authSlice.js";
import {CustomModal} from "../shared/CustomModal/CustomModal.jsx";
import {LogOut} from "../LogOut/LogOut.jsx";
import {useState} from "react";
import AuthToggle from "../shared/AuthToggle/AuthToggle";
import HeaderProfile from "./HeaderProfile";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const [modalLogOutOpen, setModalLogOutOpen] = useState(false);
  const token = useSelector(selectToken)
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
      {token
              ? <button type="button" className={styles.btn} onClick={() => setModalLogOutOpen(true)}>Log Out</button>
              : <AuthToggle/>
          }
       <CustomModal isOpen={modalLogOutOpen} onClose={() => setModalLogOutOpen(false)}>
         <LogOut setModalLogOutOpen={setModalLogOutOpen}/>
       </CustomModal>
      <HeaderProfile colorWhite={isHome} />
    </header>
  );
};

export default Header;
