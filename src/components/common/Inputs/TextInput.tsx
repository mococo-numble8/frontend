import React from 'react';
import styles from './TextInput.module.scss';
import classNames from 'classnames/bind';

interface PropsType {
  type: string;
  id?: string;
  name?: string;
  placeholder?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  icon?: React.ReactNode;
  validation?: boolean;
}

const cx = classNames.bind(styles);

const TextInput = ({
  type,
  placeholder,
  onFocus,
  onChange,
  onBlur,
  icon,
  validation,
}: PropsType) => {

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon && icon}</div>
      <input
        type={type}
        className={cx(
          'text-input',
          { 'text-input__with-icon': icon },
          { valid: validation },
        )}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextInput;
