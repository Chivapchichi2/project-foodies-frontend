import styles from "./Header.module.css";
import stylesFromFooter from "../Footer/Footer.module.css";
import cx from "classnames";
import AuthToggle from "../shared/AuthToggle/AuthToggle";

const Header = () => {
  return (
    <header className={styles.header_wrap}>
      <a
        className={cx(stylesFromFooter.logo, styles.logo_white)}
        href="/"
        aria-label="Logo Foodies"
      >
        <p>Foodies</p>
      </a>
     <AuthToggle/>
    </header>
  );
};

export default Header;
