import PropTypes from "prop-types";
import styles from "./Title.module.css";
import cx from "classnames";

const Title = ({ text }) => {
  return <h1 className={cx(styles.title)}>{text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
