import PropTypes from "prop-types";
import styles from "./IconButton.module.css";
import cx from "classnames";

import Icon from "../Icon/Icon";

const IconButton = ({ onClick = () => {}, iconId, width = "16", height = "16" }) => {
  return (
    <button className={cx(styles.button)} onClick={onClick}>
      <Icon iconId={iconId} width={width} height={height} />
    </button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  iconId: PropTypes.string,
};

export default IconButton;
