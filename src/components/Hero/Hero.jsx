import Button from "../shared/Button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.wrap_hero}>
      <h1 className={styles.title}>Improve Your Culinary Talents</h1>
      <p className={styles.subtitle}>
        Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and
        tastes of various cuisines.
      </p>
      <Button text="Add recipe" classname={styles.btn_hero} />
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
