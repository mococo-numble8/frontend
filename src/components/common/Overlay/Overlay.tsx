import React, { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useStore } from 'store/store';
import styles from './Overlay.module.scss';

const portalElement = document.getElementById('overlays');

const Overlay: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOverlay, setOverlay } = useStore();

  useEffect(() => {
    return () => setOverlay(false);
  }, [setOverlay]);

  return (
    <>
      {portalElement &&
        isOverlay &&
        createPortal(
          <>
            <div className={styles.overlay} onClick={() => setOverlay(false)} />
            {children}
          </>,
          portalElement,
        )}
    </>
  );
};

export default Overlay;
