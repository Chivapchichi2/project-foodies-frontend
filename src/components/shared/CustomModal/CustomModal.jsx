import Modal from 'react-modal';
import styles from './CustomModal.module.css';
import CloseSvg from './close.svg'

export const CustomModal = ({ isOpen, onClose, children }) => {

  return (
    <Modal
      isOpen={isOpen}
      className={styles.content}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
    >
      <button className={styles.btn} type="button" onClick={() => onClose()}>
        <img src={CloseSvg} alt={'button close'} />
      </button>
      {children}
    </Modal>
  );
};

