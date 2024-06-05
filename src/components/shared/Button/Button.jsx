import PropTypes from "prop-types";
import styles from "./Button.module.css";
import cx from "classnames";

const Button = ({ text = "Button", onClick = () => {}, variant = "button", type = "button" }) => {
  return (
    <button type={type} className={cx(styles.button, styles[variant])} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconId: PropTypes.string,
  variant: PropTypes.oneOf([
    "button",
    "auth",
    "recipe",
    "categoryName",
    "publish",
    "log_follow",
    "follow_user",
  ]),
};

export default Button;
