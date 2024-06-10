import styles from "./Header.module.css";
import stylesFromFooter from "../Footer/Footer.module.css";
import cx from "classnames";
import AuthToggle from "../shared/AuthToggle/AuthToggle";
import {useSelector} from "react-redux";
import {selectToken} from "../../store/features/authSlice.js";
import {CustomModal} from "../shared/CustomModal/CustomModal.jsx";
import {LogOut} from "../LogOut/LogOut.jsx";
import {useState} from "react";

const Header = () => {
    const [modalLogOutOpen, setModalLogOutOpen] = useState(false);
    const token = useSelector(selectToken)

  return (
      <header className={styles.header_wrap}>
          <a
              className={cx(stylesFromFooter.logo, styles.logo_white)}
              href="/"
              aria-label="Logo Foodies"
          >
              <p>Foodies</p>
          </a>

          {token
              ? <button type="button" className={styles.btn} onClick={() => setModalLogOutOpen(true)}>Log Out</button>
              : <AuthToggle/>
          }
          <CustomModal isOpen={modalLogOutOpen} onClose={() => setModalLogOutOpen(false)}>
              <LogOut setModalLogOutOpen={setModalLogOutOpen}/>
          </CustomModal>
      </header>
  );
};

export default Header;
