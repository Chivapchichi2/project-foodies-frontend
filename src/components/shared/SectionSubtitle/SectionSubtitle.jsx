import styles from "./SectionSubtitle.module.css";
import cx from "classnames";

const SectionSubtitle = ({ text }) => {
  return <h3 className={cx(styles.section_subtitle)}>{text}</h3>;
};

export default SectionSubtitle;
