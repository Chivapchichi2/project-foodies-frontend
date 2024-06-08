import { useState } from "react";
import styles from "./AuthToggle.module.css";

const AuthToggle = () => {
  const [active, setActive] = useState("signIn");

  return (
    <div
      className={`${styles.toggleContainer} ${
        styles[active === "signIn" ? "signInActive" : "signUpActive"]
      }`}
    >
      <div className={styles.slider}></div>
      <button
        className={`${styles.toggleButton} ${styles.signIn}`}
        onClick={() => setActive("signIn")}
      >
        SIGN IN
      </button>
      <button
        className={`${styles.toggleButton} ${styles.signUp}`}
        onClick={() => setActive("signUp")}
      >
        SIGN UP
      </button>
    </div>
  );
};

export default AuthToggle;
