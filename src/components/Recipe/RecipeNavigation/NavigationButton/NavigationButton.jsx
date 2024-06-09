import { NavLink } from "react-router-dom";
import Icon from "src/components/shared/Icon/Icon.jsx";
import cx from "classnames";

import styles from "./styles.module.css";

export const NavigationButton = ({ category, url, imgUrl }) => {
  return (
    <NavLink
      className={cx(styles["recept-nav-btn"])}
      to={url}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className={cx(styles["labels-wrap"])}>
        <p className={cx(styles["category"])}>{category}</p>
        <div className={cx(styles["icon-wrap"])}>
          <Icon style={cx(styles["icon"])} iconId={"icon-arrow-up-right"} width={20} height={20} />
        </div>
      </div>
    </NavLink>
  );
};
