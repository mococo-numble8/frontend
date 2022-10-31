import React, { useRef, useState } from 'react';
import styles from './TextInput.module.scss';
import classNames from 'classnames/bind';

interface PropsType {
  type: string;
  id?: string;
  name?: string;
  label?: string;
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
  label,
  placeholder,
  onFocus,
  onChange,
  onBlur,
  icon,
  validation,
}: PropsType) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocus, setFocus] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon && icon}</div>
      <input
        className={cx('text-input', { 'text-input-with-icon': icon })}
        ref={ref}
        name="text-input"
        type={type}
        placeholder={placeholder ? placeholder : ''}
        onFocus={e => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          onFocus && onFocus(e);
          setFocus(true);
        }}
        onChange={onChange}
        onBlur={e => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          onBlur && onBlur(e);
          setFocus(false);
        }}
      />
      <div className={cx('input', { valid: validation, focused: isFocus })}>
        <label htmlFor="input">{label}</label>
      </div>
    </div>
  );
};

export default TextInput;
