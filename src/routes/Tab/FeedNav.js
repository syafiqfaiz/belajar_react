import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import FeedScreen from '../../screens/Authorized/FeedScreen';
import ShowFeedScreen from '../../screens/Authorized/ShowFeedScreen';


const RootNav = StackNavigator({
  Feed: { screen: FeedScreen },
  ShowFeed: { screen: ShowFeedScreen}
});

export default RootNav
