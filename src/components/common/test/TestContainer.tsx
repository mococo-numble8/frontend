import React, { useEffect, useState } from 'react';
import TextInput from '../TextInput';

const TestIcon = () => {
  return <div>icon</div>;
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
      <TextInput
        onFocus={onFocus}
        type="text"
        onChange={onChange}
        onBlur={onBlur}
        icon={<TestIcon />}
        iconPosition="right"
      />
    </div>
  );
};

export default TestContainer;
