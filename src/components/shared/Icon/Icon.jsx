import styles from "./Icon.module.css";
import cx from "classnames";

const Icon = ({ iconId, width, height }) => {
  return (
    <>
      {iconId && (
        <svg className={cx(styles.icon)} aria-hidden="true">
          <use href={`#${iconId}`} width={width} height={height} />
        </svg>
      )}
    </>
  );
};

export default Icon;
