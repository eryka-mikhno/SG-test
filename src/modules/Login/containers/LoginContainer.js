import React from 'react';

import config from 'src/config';
import LoginForm from '../components/LoginForm';
import clientLoginScheme from '../constants';

const LoginContainer = () => {
  const onSubmit = () => clientLoginScheme.onSubmit();

  const title = clientLoginScheme.buttonLabel;

  const sendingProps = {
    title,
    onPress: onSubmit,
    client: config.client.name,
  };

  return <LoginForm {...sendingProps} />;
};

export default LoginContainer;
