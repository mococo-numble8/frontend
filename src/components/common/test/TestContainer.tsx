import React, { useEffect, useState } from 'react';
import TextInput from '../TextInput';

const TestContainer = () => {
  const [input, setInput] = useState('');

  const onFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    console.log('on focus', e.currentTarget);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div>
      <TextInput onFocus={onFocus} type="text" onChange={onChange} />
    </div>
  );
};

export default TestContainer;
