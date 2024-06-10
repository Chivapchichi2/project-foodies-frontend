import { useState } from "react";
import styles from "./AuthToggle.module.css";
import {SignInForm} from "../../SignIn/SignInForm.jsx";
import {SignUpForm} from "../../SignUp/SignUpForm.jsx";
import {CustomModal} from "../CustomModal/CustomModal.jsx";

const AuthToggle = () => {
  const [active, setActive] = useState("signIn");
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);
  const [modalSignInOpen, setModalSignInOpen] = useState(false);

  const handleClickSignUp = () => {
    setActive("signUp");
    setModalSignUpOpen(true);
  };

  const handleClickSignIn = () => {
    setActive("signIn");
    setModalSignInOpen(true);
  };

  const handleCloseSignUp = () =>  setModalSignUpOpen(false);
  const handleCloseSignIn = () => setModalSignInOpen(false);

  return (
      <>
        <div
            className={`${styles.toggleContainer} ${
                styles[active === "signIn" ? "signInActive" : "signUpActive"]
            }`}
        >
          <div className={styles.slider}></div>
          <button
              className={`${styles.toggleButton} ${styles.signIn}`}
              onClick={handleClickSignIn}
          >
            SIGN IN
          </button>
          <button
              className={`${styles.toggleButton} ${styles.signUp}`}
              onClick={handleClickSignUp}
          >
            SIGN UP
          </button>
        </div>
        {active === "signIn"
            ? (
                <CustomModal isOpen={modalSignInOpen} onClose={handleCloseSignIn}>
                  <SignInForm handleClickSignUp={handleClickSignUp}/>
                </CustomModal>
            )
            : (
                <CustomModal isOpen={modalSignUpOpen} onClose={handleCloseSignUp}>
                  <SignUpForm handleClickSignIn={handleClickSignIn}/>
                </CustomModal>
            )
        }
      </>
  );
};

export default AuthToggle;
