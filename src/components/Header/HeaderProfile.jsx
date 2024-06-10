import { useState } from "react";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./HeaderProfile.module.css";
import cx from "classnames";
import HeaderProfileMenu from "./HeaderProfileMenu";

const HeaderProfile = ({ isHome }) => {
  const [toogleOpen, setToogleOpen] = useState(false);

  const handlerOpenProfile = () => {
    setToogleOpen(!toogleOpen);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.wrap_profile}>
        <img
          className={styles.img_profile}
          src="https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1717718400&semt=ais_user"
          alt="user avatar"
        />
        <p className={styles.name_profile}>Victoria</p>
        <IconButton
          style={cx(styles.btn_arrow, toogleOpen && styles.btn_arrow_open)}
          iconId="icon-chevron-down"
          width="18"
          height="18"
          stroke="#fff"
          onClick={handlerOpenProfile}
        />
      </div>
      {toogleOpen && <HeaderProfileMenu isHome={isHome} />}

      <IconButton style={styles.btn_menu} iconId="icon-mobile-menu" width="28" height="28" />
    </div>
  );
};

export default HeaderProfile;
