import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import AuthorizedScreen from './authorized';
import UnauthorizedScreen from './unauthorized';
import localStorage from '../lib/LocalStorage'

class RouteNavigation extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: false
    }
  }

  componentWillMount(){
    this.query()
  }

  async query() {
    let token = await localStorage.getItem('token')
    if (token) {
      this.setState({ isLogin: true})
    }
  }

  renderScreens(){
    const RootNav = StackNavigator({
      Authorized: {
        screen: AuthorizedScreen,
      },
      Unauthorized: {
        screen: UnauthorizedScreen,
      }
    },{
      initialRouteName: this.state.isLogin ? 'Authorized' : 'Unauthorized',
      headerMode: 'none'
    })

    return <RootNav/>
  }

  render(){
    return (
      this.renderScreens()
    )
  }
}

export default RouteNavigation
