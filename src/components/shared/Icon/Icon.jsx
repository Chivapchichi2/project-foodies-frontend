import styles from "./Icon.module.css";
import cx from "classnames";

const Icon = ({ iconId, style, width, height }) => {
  return (
    <>
      {iconId && (
        <svg className={cx(styles.icon, style)} aria-hidden="true">
          <use href={`#${iconId}`} width={width} height={height} />
        </svg>
      )}
    </>
  );
};

export default Icon;
