import styles from "./styles.module.css";
import cx from "classnames";
import {CustomModal} from "../../components/shared/CustomModal/CustomModal.jsx";
import {SignUpForm} from "../../components/SignUp/SignUpForm.jsx";
import {useState} from "react";

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className={cx(styles.test)}>Home</div>
            <button
                className={styles.btn}
                type="button"
                onClick={() => setModalOpen(true)}
            >
                Open modal
            </button>
            <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <SignUpForm/>
            </CustomModal>
        </>
    )
};

export default Home;
