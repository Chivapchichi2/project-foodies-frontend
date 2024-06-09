import styles from "./IconButton.module.css";
import cx from "classnames";

import Icon from "../Icon/Icon";

const IconButton = ({
  onClick = () => {},
  style,
  styleSVG,
  iconId,
  stroke,
  width = "16",
  height = "16",
  stroke = "#000",
}) => {
  return (
    <button className={cx(styles.button, style)} onClick={onClick}>
<<<<<<< Updated upstream
      <Icon
        iconId={iconId}
        width={width}
        height={height}
        stroke={stroke}
        style={cx(styles.icon, styleSVG)}
      />
=======
      <Icon stroke={stroke} iconId={iconId} width={width} height={height} customStyle={styleSVG} />
>>>>>>> Stashed changes
    </button>
  );
};

export default IconButton;

<IconButton iconId="icon-trash" />;
