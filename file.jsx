import styles from "./styles.module.css";
import cx from "classnames";
import { useEffect } from "react";
import { loadSvgSprite } from "../../utilities/loadSvgSprite";

const Home = () => {
  useEffect(() => {
    loadSvgSprite("symbol-defs.svg");
  }, []);
  return <div className={cx(styles.test)}>Home</div>;
};

export default Home;
