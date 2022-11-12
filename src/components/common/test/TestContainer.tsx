import React, { useEffect, useState } from 'react';
import TextInput from '../Inputs/TextInput';
import Button from '../Button';
import ToggleButton from '../Inputs/ToggleButton';
import FloatingButton from '../FloatingButton';

const TestIcon = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/logo192.png`}
        width="28px"
        alt="icon"
      />
    </div>
  );
};

const TestContainer = () => {
  const [input, setInput] = useState('');

  const onFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    console.log('on focus', e.currentTarget);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    console.log(e.currentTarget.value);
  };

  const floatingOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(e);
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div>
      <div style={{ width: '800px' }}>
        <br />
        <TextInput
          placeholder="input text"
          onFocus={onFocus}
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          icon={<TestIcon />}
        />
        <br />
        <Button disabled={false}>Button</Button>
      </div>
      <br />
      <ToggleButton></ToggleButton>
      <br />
      <FloatingButton onClick={floatingOnClick} icon={<TestIcon />} />
    </div>
  );
};

export default TestContainer;
