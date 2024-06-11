import styles from "./Hero.module.css";
import cx from "classnames";
import { selectToken } from "../../store/features/authSlice.js";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CustomModal } from "../shared/index.js";
import { SignUpForm } from "../SignUp/SignUpForm";
import { useState } from "react";
import { SignInForm } from "../SignIn/SignInForm";

const Hero = () => {
  const token = useSelector(selectToken);
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);
  const [modalSignInOpen, setModalSignInOpen] = useState(false);
  const [active, setActive] = useState("signIn");

  const handlerClick = () => {
    if (!token) {
      setModalSignUpOpen(true);
      handleClickSignUp();
    }
  };

  const handleClickSignIn = () => {
    setActive("signIn");
    setModalSignInOpen(true);
  };

  const handleClickSignUp = () => {
    setActive("signUp");
    setModalSignUpOpen(true);
  };

  const handleCloseSignUp = () => setModalSignUpOpen(false);
  const handleCloseSignIn = () => setModalSignInOpen(false);

  return (
    <section className={styles.wrap_hero}>
      <h1 className={styles.title}>Improve Your Culinary Talents</h1>
      <p className={styles.subtitle}>
        Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and
        tastes of various cuisines.
      </p>
      <NavLink to={token && "/recipe/add"} className={styles.link_btn_hero} onClick={handlerClick}>
        Add recipe
      </NavLink>
      {modalSignUpOpen && active !== "signIn" ? (
        <CustomModal isOpen={modalSignUpOpen} onClose={handleCloseSignUp}>
          <SignUpForm handleClickSignIn={handleClickSignIn} />
        </CustomModal>
      ) : (
        <CustomModal isOpen={modalSignInOpen} onClose={handleCloseSignIn}>
          <SignInForm handleClickSignUp={handleClickSignUp} />
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
