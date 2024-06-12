import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";

const BreadCrumbs = ({ currentPage }) => {
  const location = useLocation();

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/" className={styles.link_to_home}>
        Home
      </Link>
      <span className={styles.slash}>/</span>
      <span className={styles.current_page}>{currentPage}</span>
    </div>
  );
};

export default BreadCrumbs;
