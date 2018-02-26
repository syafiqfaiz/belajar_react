import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import localStorage from '../../lib/LocalStorage';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '' };
  }

  login() {
    const {email, password} = this.state;
    console.warn(email)
    // if (email == 'Abu' && password == 'abu') {
    //   localStorage.setItem('token', 'aaaaa')
    //   this.props.navigation.navigate('Authorized')
    // } else {
    //   alert('Incorrect')
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          label = 'Email'
          placeholder = 'Enter your email'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          label = 'Password'
          placeholder = 'Enter your password'
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />

        <Button onPress={() => this.login()}>
          Login
        </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  }
});
