import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator
} from 'react-native';
import localStorage from '../../lib/LocalStorage';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import * as firebase from 'firebase';
import {firebaseConfig} from '../../lib/firebaseConfig';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      authenticating: false,
      user: null,
      error: '',
    };
  }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  login() {
    const {email, password} = this.state;

    this.setState({
      authenticating: true
    })
    // if (email == 'Abu' && password == 'abu') {
    //   localStorage.setItem('token', 'aaaaa')
    //   this.props.navigation.navigate('Authorized')
    // } else {
    //   alert('Incorrect')
    // }

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => { this.setState({
        authenticating: false,
        user,
        error: '',
        })
        localStorage.setItem('token', 'aaaaa')
        this.props.navigation.navigate('Authorized')
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          authenticating: false,
        })
        // Login was not successful
        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //   .then(user => this.setState({
        //     authenticating: false,
        //     user,
        //     error: '',
        //   }))
        //   .catch(() => this.setState({
        //     authenticating: false,
        //     user: null,
        //     error: 'Authentication Failure',
        //   }))
      })
  }

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
    return (
      <View style={styles.form}>
        <Text>{this.state.error}</Text>
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
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1,
    padding: 10,
    margin: 20
  }
});
