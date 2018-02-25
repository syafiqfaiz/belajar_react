import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import SettingScreen from '../../screens/Authorized/SettingScreen';


const RootNav = StackNavigator({
  Setting: { screen: SettingScreen },
});

export default RootNav
