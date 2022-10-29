import React, { useRef } from 'react';
import './TextInput.scss';

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
  iconPosition?: string;
}

const TextInput = ({
  type,
  label,
  placeholder,
  onFocus,
  onChange,
  onBlur,
  icon,
  iconPosition,
}: PropsType) => {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <div>{iconPosition === 'left' && icon}</div>
      <input
        ref={ref}
        name="input"
        type={type}
        placeholder={placeholder ? placeholder : ''}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        className={'input'}
      />
      <label htmlFor="input">{label}</label>
      <div>{iconPosition === 'right' && icon}</div>
    </div>
  );
};

export default TextInput;