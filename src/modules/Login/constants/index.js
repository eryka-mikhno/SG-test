import config from 'src/config';
import {
  onSubmitClient1,
  onSubmitClient2,
  onSubmitClient3,
  onSubmitDefaultClient,
} from '../helpers/onLoginFormSubmit';

export const defaultSheme = {
  onSubmit: onSubmitDefaultClient,
  buttonLabel: 'Submit',
};

export const clientSubmitButtonSheme = {
  1: {
    onSubmit: onSubmitClient1,
    buttonLabel: 'Submit',
  },
  2: {
    onSubmit: onSubmitClient2,
    buttonLabel: 'Log In',
  },
  3: {
    onSubmit: onSubmitClient3,
    buttonLabel: 'Sign In',
  },
}

export default (clientLoginScheme = clientSubmitButtonSheme[config.client.id]
  ? clientSubmitButtonSheme[config.client.id]
  : defaultSheme);
