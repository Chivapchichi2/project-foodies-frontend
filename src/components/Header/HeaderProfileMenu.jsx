import styles from "./HeaderProfile.module.css";
import cx from "classnames";
import Icon from "../shared/Icon/Icon";

const HeaderProfileMenu = ({ isHome, onClick }) => {
  const whiteStyle = !isHome && styles.color_black;
  return (
    <div className={cx(styles.wrap_profile_modal, !isHome && styles.wrap_profile_modal_recipe)}>
      <a href="" className={cx(styles.link, whiteStyle)}>
        Profile
      </a>
      <button
        type="button"
        className={cx(styles.link, styles.link_log_out, whiteStyle)}
        onClick={onClick}
      >
        Log out
        <Icon
          iconId="icon-arrow-up-right"
          width="18"
          height="18"
          customStyle={cx(styles.icon_log_out)}
        />
      </button>
    </div>
  );
};

export default HeaderProfileMenu;
