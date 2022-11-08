import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useStore } from 'store/store';
import styles from './Overlay.module.scss';

const portalElement = document.getElementById('overlays');

const Overlay: React.FC<PropsWithChildren> = ({ children }) => {
  const { isModal, setModal } = useStore();

  return (
    <>
      {portalElement &&
        isModal &&
        createPortal(
          <div className={styles.overlay} onClick={() => setModal(false)}>
            {children}
          </div>,
          portalElement,
        )}
    </>
  );
};

export default Overlay;
