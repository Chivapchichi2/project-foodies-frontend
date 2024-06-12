import Modal from 'react-modal';
import styles from './CustomModal.module.css';
import {Icon} from "../index.js";

export const CustomModal = ({ isOpen, onClose, children }) => {

  return (
    <Modal
      isOpen={isOpen}
      className={styles.content}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      closeTimeoutMS={250}
      onRequestClose={() => onClose()}
      bodyOpenClassName={styles.block_scroll}
    >
      <button className={styles.btn} type="button" onClick={() => onClose()}>
        <Icon iconId={'icon-close-btn'} width={'24'} height={'24'}/>
      </button>

      {children}
    </Modal>
  );
};

