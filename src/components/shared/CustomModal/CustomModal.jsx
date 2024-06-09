import Modal from 'react-modal';
import styles from './CustomModal.module.css';
import Icon from "../Icon/Icon.jsx";

export const CustomModal = ({ isOpen, onClose, children }) => {

  return (
    <Modal
      isOpen={isOpen}
      className={styles.content}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      closeTimeoutMS={250}
      onRequestClose={() => onClose()}
    >
      <button className={styles.btn} type="button" onClick={() => onClose()}>
        <Icon iconId={'icon-close-btn'} width={20} height={20}/>
      </button>

      {children}
    </Modal>
  );
};

