import React from 'react';
import {StatusBar, TouchableOpacity, Text, View} from 'react-native';

import TextInput from 'src/common/TextInput';
import styles from './styles';

const LoginForm = ({title, onPress, client}) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.text}>Current client: {client}</Text>
    <TextInput autoCompleteType={'username'} placeholder={'Your username'} />
    <TextInput
      autoCompleteType={'password'}
      placeholder={'Your password'}
      secureTextEntry
    />
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default LoginForm;
