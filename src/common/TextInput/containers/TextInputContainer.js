import React, {useState} from 'react';

import CustomTextInput from '../components';

const TextInputContainer = ({
  placeholder,
  autoCompleteType,
  secureTextEntry,
}) => {
  const [value, setValue] = useState('');

  const onInputChange = (value) => {
    setValue(value);
  };

  const sendingProps = {
    value,
    placeholder,
    autoCompleteType,
    secureTextEntry,
    onInputChange,
  };

  return <CustomTextInput {...sendingProps} />;
};

export default TextInputContainer;
