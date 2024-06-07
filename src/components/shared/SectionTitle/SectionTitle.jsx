import styles from "./SectionTitle.module.css";
import cx from "classnames";

const SectionTitle = ({ text }) => {
  return <h2 className={cx(styles.section_title)}>{text}</h2>;
};

export default SectionTitle;
