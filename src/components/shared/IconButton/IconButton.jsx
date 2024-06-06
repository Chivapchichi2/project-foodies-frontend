import styles from "./IconButton.module.css";
import cx from "classnames";

import Icon from "../Icon/Icon";

const IconButton = ({ onClick = () => {}, iconId, width = "16", height = "16" }) => {
  return (
    <button className={cx(styles.button)} onClick={onClick}>
      <Icon iconId={iconId} width={width} height={height} style={cx(styles.icon)} />
    </button>
  );
};

export default IconButton;
