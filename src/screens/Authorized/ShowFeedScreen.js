import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ShowFeedScreen extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {item} = this.props. navigation.state.params
    return (
      <View style={styles.container}>
        <Text>
          Feed screen
        </Text>
        <Text>
          {item.title}
          {item.id}
        </Text>
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
