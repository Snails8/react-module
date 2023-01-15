import styles from './Modal.module.css';
import CancelSvg from '../../../../src/assets/images/cancel.svg';
import { ReactNode } from 'react';

type ModalProps = {
  handleCloseModal: () => void 
  children: ReactNode
  title?: string 
}

export const Modal = (props: ModalProps) => {
  const {handleCloseModal, children, title} = props;

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header_container}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.cancel_container} onClick={() => handleCloseModal()}>
            <div className={styles.cancel}>
              <img src={CancelSvg} alt="cancelIcon" />
            </div>
          </div>
        </div>
        <div className={styles.contents_container}>
          <div className={styles.title}></div>
          <div className={styles.body}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};