import styles from "./styles.module.css";
import cx from "classnames";
import { CustomModal } from "../../components/shared/CustomModal/CustomModal.jsx";
import { SignUpForm } from "../../components/SignUp/SignUpForm.jsx";
import { useState } from "react";
import Icon from "../../components/shared/Icon/Icon.jsx";
import IconButton from "../../components/shared/IconButton/IconButton.jsx";
import { LogOut } from "../../components/LogOut/LogOut.jsx";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLogOutOpen, setModalLogOutOpen] = useState(false);

  return (
    <>
      <div className={cx(styles.test)}>Home</div>
      <button className={styles.btn} type="button" onClick={() => setModalOpen(true)}>
        SignUp / SignIn
      </button>
      <button className={styles.btn} type="button" onClick={() => setModalLogOutOpen(true)}>
        Log Out
      </button>
      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <SignUpForm />
      </CustomModal>
      <CustomModal isOpen={modalLogOutOpen} onClose={() => setModalLogOutOpen(false)}>
        <LogOut setModalLogOutOpen={setModalLogOutOpen} />
      </CustomModal>

      <div>
        <Icon iconId="icon-trash" width="20" height="20" stroke="#ac1d1d" />
      </div>

      <IconButton iconId="icon-trash" />
      <IconButton iconId="icon-arrow-back" />
    </>
  );
};

export default Home;
