import React from 'react';
import styles from './Container.module.scss';

interface PropsType {
  children: React.ReactNode;
}

function Container({ children }: PropsType) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
