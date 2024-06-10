import styles from "./HeaderProfile.module.css";
import cx from "classnames";
import Icon from "../shared/Icon/Icon";

const HeaderProfileMenu = ({ isHome }) => {
  return (
    <ul className={cx(styles.wrap_profile_modal, isHome && styles.wrap_profile_modal_recipe)}>
      <li>
        <a className={styles.link}>Profile</a>
      </li>
      <li>
        <a className={cx(styles.link, styles.link_log_out)}>
          Log out
          <Icon
            iconId="icon-arrow-up-right"
            width="18"
            height="18"
            customStyle={cx(styles.icon_log_out)}
          />
        </a>
      </li>
    </ul>
  );
};

export default HeaderProfileMenu;
