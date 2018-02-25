import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import AuthorizedScreen from './authorized';
import UnauthorizedScreen from './unauthorized';

constant RootNav = StackNavigator({
  Authorized: {
    screen: AuthorizedScreen,
  },
  Unauthorized: {
    screen: UnauthorizedScreen,
  }
},{
  initialRouteName: 'Authorized'
})

export default RootNav
