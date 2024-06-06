
import styles from "./Button.module.css";
import cx from "classnames";

const Button = ({ text = "Button", onClick = () => {}, variant = "button", type = "button" }) => {
  return (
    <button type={type} className={cx(styles.button, styles[variant])} onClick={onClick}>
      {text}
    </button>
  );
};


export default Button;
