import classNames from 'classnames';
import React, { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useStore } from 'store/store';
import styles from './Overlay.module.scss';

type PropsType = PropsWithChildren<{
  duration?: boolean;
}>;

const portalElement = document.getElementById('overlays');
const cx = classNames.bind(styles);

const Overlay: React.FC<PropsType> = ({ duration, children }) => {
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
            <div className={cx(styles.overlay, duration && styles.off)} onClick={() => setOverlay(false)} />
            {children}
          </>,
          portalElement,
        )}
    </>
  );
};

export default Overlay;
