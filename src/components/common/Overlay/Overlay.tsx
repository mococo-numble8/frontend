import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Overlay.module.scss';

interface PropsType {
  children: ReactNode;
}

const portalElement = document.getElementById('overlays');

const Overlay: React.FC<PropsType> = props => {
  return (
    <>
      {portalElement &&
        createPortal(
          <div className={styles.overlay}>{props.children}</div>,
          portalElement,
        )}
    </>
  );
};

export default Overlay;
