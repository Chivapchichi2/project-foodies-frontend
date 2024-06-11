import styles from "./IconButton.module.css";
import cx from "classnames";

// Змінив компонент для передачі stroke в глибину. Додав пропс stroke до IconButton
// Намагався не ламати компонент Icon, якщо щось не так, то дзони, буду розбиратись

import Icon from "../Icon/Icon";

const IconButton = ({
  onClick = () => {},
  style,
  styleSVG,
  iconId,
  width = "16",
  height = "16",
  stroke = "#000",
}) => {
  return (
    <button className={cx(styles.button, style)} onClick={onClick}>
      <Icon iconId={iconId} width={width} height={height} customStyle={styleSVG} stroke={stroke} />
    </button>
  );
};

export default IconButton;