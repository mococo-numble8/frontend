import React, { useRef, useState } from 'react';
import styles from './TextInput.module.scss';

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
}

const TextInput = ({
  type,
  label,
  placeholder,
  onFocus,
  onChange,
  onBlur,
  icon,
}: PropsType) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocus, setFocus] = useState(false);

  return (
    <div className={`${styles.input} ${isFocus ? styles.focused : ''}`}>
      <div className={styles.icon}>{icon && icon}</div>
      <input
        ref={ref}
        name="input"
        type={type}
        placeholder={placeholder ? placeholder : ''}
        onFocus={e => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          onFocus ? onFocus(e) : null;
          setFocus(true);
        }}
        onChange={onChange}
        onBlur={e => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          onBlur ? onBlur(e) : null;
          setFocus(false);
        }}
      />
      <label htmlFor="input">{label}</label>
    </div>
  );
};

export default TextInput;
