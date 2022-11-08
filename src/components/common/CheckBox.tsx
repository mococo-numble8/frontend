import React from 'react';
import classNames from 'classnames/bind';
import styles from './CheckBox.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const CheckBox = ({ id, label, onChange, disabled = false }: PropsType) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={`${id}-checkbox-input`}
        className={styles.checkbox}
        onChange={onChange}
        disabled={disabled}
      />{' '}
      <label className={styles.label} htmlFor={`${id}-checkbox-input`}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
