import React, { useEffect, useState } from 'react';
import TextInput from '../TextInput';
import Button from '../Button';
import ToggleButton from '../ToggleButton';

const TestIcon = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/logo192.png`}
        width="32px"
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
    </div>
  );
};

export default TestContainer;
