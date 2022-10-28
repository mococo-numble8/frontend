import React from 'react';
import './TextInput.scss';

interface PropsType {
  type: string;
  label?: string;
  placeholder?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  type,
  label,
  placeholder,
  onFocus,
  onChange,
}: PropsType) => {
  return (
    <>
      <input
        name="input"
        placeholder={placeholder ? placeholder : ''}
        onFocus={onFocus}
        onChange={onChange}
        className={'input'}
        type={type}
      />
      <label htmlFor="input">{label}</label>
    </>
  );
};

export default TextInput;
