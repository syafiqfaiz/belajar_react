import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import FeedNav from './Tab/FeedNav';
import SettingNav from './Tab/SettingNav';


const RootNav = TabNavigator({
  Feed: { screen: FeedNav },
  Settings: { screen: SettingNav },
});

export default RootNav
