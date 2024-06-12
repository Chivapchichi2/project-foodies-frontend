import styles from "./Hero.module.css";
import cx from "classnames";
import { selectToken } from "../../store/features/authSlice.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, CustomModal } from "../shared/index.js";
import { useState } from "react";
import { SignInForm } from "src/components";

const Hero = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const [modalSignInOpen, setModalSignInOpen] = useState(false);

  const handlerClick = () => {
    if (!token) {
      setModalSignInOpen(true);
    } else {
      navigate("/recipe/add");
    }
  };

  const handleCloseSignIn = () => setModalSignInOpen(false);

  return (
    <section className={styles.wrap_hero}>
      <h1 className={styles.title}>Improve Your Culinary Talents</h1>
      <p className={styles.subtitle}>
        Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and
        tastes of various cuisines.
      </p>
      <Button
        text="Add recipe"
        type="button"
        onClick={handlerClick}
        classname={styles.link_btn_hero}
      />
      {modalSignInOpen && (
        <CustomModal isOpen={modalSignInOpen} onClose={handleCloseSignIn}>
          <SignInForm />
        </CustomModal>
      )}

      <div className={styles.wrap_img_hero}>
        <div className={cx(styles.smole_img, styles.img_general)}></div>
        <div className={cx(styles.big_img, styles.img_general)}></div>
      </div>
    </section>
  );
};

export default Hero;
