import styles from "./Icon.module.css";
import cx from "classnames";

const Icon = ({ iconId, width = "16", height = "16", stroke = "#000", customStyle = "" }) => {
  return (
    <>
      {iconId && (
        <svg
          className={cx(styles.icon, customStyle)}
          width={width}
          height={height}
          stroke={stroke}
          aria-hidden="true"
        >
          <use href={`#${iconId}`} />
        </svg>
      )}
    </>
  );
};

export default Icon;

// Example use
{
  /* <div>
  <Icon iconId="icon-trash" width="20" height="20" stroke="#ac1d1d" />
</div>; */
}
