import styles from "./IconButton.module.css";
import cx from "classnames";

const IconButton = ({ onClick = () => {}, iconId, style = {} }) => {
  return (
    <button className={cx(styles.button)} onClick={onClick}>
      <svg className={cx(styles.icon)} aria-hidden="true" style={{ ...style }}>
        <use href={`#${iconId}`} />
      </svg>
    </button>
  );
};

export default IconButton;

<IconButton iconId="icon-trash" />;
