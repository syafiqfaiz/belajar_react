import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import AuthorizedScreen from './authorized';
import UnauthorizedScreen from './unauthorized';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: false
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

export default App
