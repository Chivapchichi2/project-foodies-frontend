import { useState } from "react";
import IconButton from "../../shared/IconButton/IconButton";
import styles from "./HeaderProfile.module.css";
import cx from "classnames";
import HeaderProfileMenu from "./HeaderProfileMenu";
import { useSelector } from "react-redux";
import { selectAvatarURL, selectName } from "../../../store/features/authSlice";
import { CustomModal } from "../../shared";
import { NavLink } from "react-router-dom";

const HeaderProfile = ({ isHome, onClick }) => {
  const [toogleOpen, setToogleOpen] = useState(false);
  const [toogleModal, setToogleModal] = useState(false);
  const avatarURL = useSelector(selectAvatarURL);
  const name = useSelector(selectName);

  const handlerOpenProfile = () => {
    setToogleOpen(!toogleOpen);
  };

  const handlerToogleModal = () => {
    setToogleModal(!toogleModal);
  };

  const handlerClickOnLink = (e) => {
    if (e.target.tagName === "A") {
      handlerToogleModal();
    }
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.wrap_profile} onClick={handlerOpenProfile}>
        <img className={styles.img_profile} src={avatarURL} alt={name} />
        <p className={styles.name_profile}>{name}</p>
        <IconButton
          style={cx(styles.btn_arrow, toogleOpen && styles.btn_arrow_open)}
          iconId="icon-chevron-down"
          width="18"
          height="18"
          stroke="#fff"
        />
      </div>
      {toogleOpen && (
        <HeaderProfileMenu onClick={onClick} onClose={handlerOpenProfile} isHome={isHome} />
      )}

      <IconButton
        style={styles.btn_menu}
        styleSVG={styles.icon_arrow}
        iconId="icon-mobile-menu"
        width="28"
        height="28"
        stroke={isHome ? "#fff" : "#000"}
        onClick={handlerToogleModal}
      />
      {toogleModal && (
        <CustomModal
          isOpen={toogleModal}
          onClose={handlerToogleModal}
          customeStyles={styles.wrap_modal}
          btnStyle={styles.btn_close}
          width="28"
          height="28"
          stroke="#fff"
        >
          <div onClick={handlerClickOnLink}>
            <NavLink className={styles.logo_modal} to="/">
              foodies
            </NavLink>
            <nav className={styles.wrap_nav_link}>
              <ul>
                <li className={styles.item_nav_link}>
                  <NavLink to="/" className={styles.nav_link_modal}>
                    Home
                  </NavLink>
                </li>
                <li className={styles.item_nav_link}>
                  <NavLink to="/recipe/add" className={styles.nav_link_modal}>
                    Add recipe
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className={styles.wrap_img_modal}>
              <div className={cx(styles.smole_img, styles.img_general)}></div>
              <div className={cx(styles.big_img, styles.img_general)}></div>
            </div>
          </div>
        </CustomModal>
      )}
    </div>
  );
};

export default HeaderProfile;
