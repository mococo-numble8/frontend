import React from 'react';
import styles from './ToggleButton.module.scss';

interface PropsType {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleButton = ({ onChange }: PropsType) => {
  return (
    <div>
      <input
        className={styles.toggle}
        type="checkbox"
        hidden
        id="toggle-button"
        onChange={onChange}
      />
      <label className={styles['toggle-switch']} htmlFor="toggle-button">
        <span className={styles['toggle-button']}></span>
      </label>
    </div>
  );
};

export default ToggleButton;
