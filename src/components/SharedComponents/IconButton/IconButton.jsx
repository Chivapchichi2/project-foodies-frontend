import PropTypes from "prop-types";
import styles from "./IconButton.module.css";
import cx from "classnames";

const IconButton = ({ onClick = () => {}, iconId }) => {
  return (
    <button className={cx(styles.button)} onClick={onClick}>
      {iconId && (
        <svg className={cx(styles.button__icon)} aria-hidden="true">
          <use href={`#${iconId}`} width="16" height="16" />
        </svg>
      )}
    </button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  iconId: PropTypes.string,
};

export default IconButton;
