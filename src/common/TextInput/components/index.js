import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

const CustomTextInput = ({
  value,
  placeholder,
  autoCompleteType,
  secureTextEntry,
  onInputChange,
}) => (
  <TextInput
    onChangeText={(value) => onInputChange(value)}
    value={value}
    placeholder={placeholder}
    style={styles.input}
    autoCompleteType={autoCompleteType}
    underlineColorAndroid={'transparent'}
    secureTextEntry={secureTextEntry}
  />
);

export default CustomTextInput;
