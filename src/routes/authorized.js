import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import FeedScreen from '../screens/Authorized/FeedScreen';

constant RootNav = StackNavigator({
  Home: {
    screen: FeedScreen,
  }
},{
  initialRouteName: 'Home'
})

export default RootNav
