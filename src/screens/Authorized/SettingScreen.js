import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import localStorage from '../../lib/LocalStorage'

export default class SettingScreen extends Component {
  logout() {
    localStorage.removeItem('token')
    this.props.navigation.navigate('Unauthorized')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Setting Screen
        </Text>
        <Button
          onPress={ () =>this.logout() }
          title='Logout'
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
