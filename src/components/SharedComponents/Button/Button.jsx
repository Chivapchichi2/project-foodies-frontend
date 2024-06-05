import PropTypes from "prop-types";
import "./Button.module.css";
import cx from "classnames";

const Button = ({
  text,
  padding = "14px 30px",
  backgroundColor = "rgba(5, 5, 5, 0.9)",
  fontSize = "12px",
  fontWeight = "400",
  onClick,
}) => {
  const isTransparent = backgroundColor === "transparent";

  const buttonStyle = {
    padding,
    backgroundColor: isTransparent ? "transparent" : backgroundColor,
    color: isTransparent ? "rgb(5, 5, 5)" : "#ffffff",
    fontSize,
    fontWeight,
    border: isTransparent ? "1px solid rgb(5, 5, 5)" : "none",
  };

  return (
    <button
      className={cx("button", { "button--transparent": isTransparent })}
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
