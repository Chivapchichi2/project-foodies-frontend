import styles from "./IconButton.module.css";
import cx from "classnames";

import Icon from "../Icon/Icon";

const IconButton = ({
  onClick = () => {},
  style,
  styleSVG,
  iconId,
  width = "16",
  height = "16",
}) => {
  return (
    <button className={cx(styles.button, style)} onClick={onClick}>
      <Icon iconId={iconId} width={width} height={height} style={cx(styles.icon, styleSVG)} />
    </button>
  );
};

export default IconButton;

<IconButton iconId="icon-trash" />;
