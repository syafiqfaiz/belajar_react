import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Unauthorized/LoginScreen';
import RegisterScreen from '../screens/Unauthorized/RegisterScreen';

constant RootNav = StackNavigator({
  Register: {
    screen: RegisterScreen,
  },
  Login: {
    screen: LoginScreen
  }
},{
  initialRouteName: 'Login'
})

export default RootNav
