import React from 'react';
import styles from './FloatingButton.module.scss';

interface PropsType {
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FloatingButton = ({ icon, onClick }: PropsType) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}></button>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default FloatingButton;
