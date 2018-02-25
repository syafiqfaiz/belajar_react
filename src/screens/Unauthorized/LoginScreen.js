import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import localStorage from '../../lib/LocalStorage'

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '' };
  }

  login() {
    const {email, password} = this.state;
    if (email == 'Abu' && password == 'abu') {
      localStorage.setItem('token', 'aaaaa')
      this.props.navigation.navigate('Authorized')
    } else {
      alert('Incorrect')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{height: 50}}>
          Login
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1 , width: 200}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry= {true}
          style={{height: 40, borderColor: 'gray', borderWidth: 1 , width: 200}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        <Button
          onPress={() => this.login()}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
