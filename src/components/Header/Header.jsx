import { useSelector } from "react-redux";
import cx from "classnames";
import { useState } from "react";
import styles from "./Header.module.css";
import stylesFromFooter from "../Footer/Footer.module.css";
import AuthToggle from "../shared/AuthToggle/AuthToggle";
import { selectToken } from "../../store/features/authSlice.js";
import { CustomModal } from "../shared";
import { LogOut } from "src/components";
import HeaderProfile from "./HeaderProfile";
import { useLocation } from "react-router-dom";
import { StyledLink } from "./StyledLink.jsx";

const Header = () => {
  const [modalLogOutOpen, setModalLogOutOpen] = useState(false);
  const token = useSelector(selectToken);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const styleWhite = isHome && styles.color_white;
  return (
    <header className={cx(styles.header_wrap, !isHome && styles.header_wrap_bgc)}>
      <a className={cx(stylesFromFooter.logo, styleWhite)} href="/" aria-label="Logo Foodies">
        <p>Foodies</p>
      </a>
      {token && (
        <nav className={styles.navigation}>
          <ul className={styles.wrap_navigation}>
            <li>
              <StyledLink to="/" home={isHome.toString()}>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/recipe/add" home={isHome.toString()}>
                Add recipe
              </StyledLink>
            </li>
          </ul>
        </nav>
      )}
      {token ? (
        <HeaderProfile onClick={() => setModalLogOutOpen(true)} isHome={isHome} />
      ) : (
        <AuthToggle />
      )}
      <CustomModal isOpen={modalLogOutOpen} onClose={() => setModalLogOutOpen(false)}>
        <LogOut setModalLogOutOpen={setModalLogOutOpen} />
      </CustomModal>
    </header>
  );
};

export default Header;
