import styles from "./styles.module.css";
import cx from "classnames";
import { CustomModal } from "../../components/shared/CustomModal/CustomModal.jsx";
import { SignUpForm } from "../../components/SignUp/SignUpForm.jsx";
import { useState, useEffect } from "react";
import { loadSvgSprite } from "../../utilities/loadSvgSprite";
import IconButton from "../../components/shared/IconButton/IconButton.jsx";
import Button from "../../components/shared/Button/Button.jsx";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    loadSvgSprite("symbol-defs.svg");
  }, []);
  return (
    <>
      <div className={cx(styles.test)}>Home</div>
      <button className={styles.btn} type="button" onClick={() => setModalOpen(true)}>
        Open modal
      </button>
      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <SignUpForm />
      </CustomModal>
      {/* DELETE BELOW DEMO CODE*/}
      <div style={{ backgroundColor: "#f4f2f2", padding: "10px", width: "450px" }}>
        <Button text="sign in" variant="auth" type="submit" />
      </div>

      <div style={{ backgroundColor: "#000000", padding: "10px" }}>
        <Button text="add recipe" variant="recipe" />
        <Button text="Beef" variant="categoryName" />
      </div>
      <Button text="publish" variant="publish" />
      <div style={{ padding: "10px", width: "450px" }}>
        <Button text="log out" variant="log_follow" />
      </div>
      <Button text="follow" variant="follow_user" />
      <IconButton iconId="icon-capture-photo-camera" />
      <IconButton iconId="icon-checkbox-active" />
      <IconButton iconId="icon-checkbox-default" />
      <IconButton iconId="icon-eye" />
      {/* DELETE ABOVE DEMO CODE*/}
    </>
  );
};

export default Home;