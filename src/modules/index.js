import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Login from './Login';

const AppComponent = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{flex: 1}}>
      <Login />
    </SafeAreaView>
  </>
);

export default AppComponent;
