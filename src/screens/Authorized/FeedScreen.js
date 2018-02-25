import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  FlatList,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import feedList from './feed.json';

export default class FeedScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists: []
    }
    // this.renderCard = this.renderCard.bind(this);
  }

  componentWillMount(){
    this.setState({ lists: feedList})
  }

  navigateShowFeed(item){
    this.props.navigation.navigate('ShowFeed',{item})
  }


  _keyExtractor = (item, index) => `${item.id}`;


  renderCard = ({item}) => (
    <TouchableHighlight onPress={()=>this.navigateShowFeed(item)}>
      <View style={ styles.cardContainer }>
        <Image
            style={styles.image}
            source={{uri: item.thumbnailUrl}}
          />
        <Text style={styles.description} >{item.title}</Text>
      </View>
    </TouchableHighlight>
  )

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Feed screen
        </Text>
        <Button
          title="Navigate"
          onPress={() => this.navigateShowFeed()}
        />
        <FlatList
          data={this.state.lists}
          renderItem={this.renderCard}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  cardContainer: {
    width: width * 0.9,
    backgroundColor: 'red',
    margin: 10,
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150,
    flex: 0.2
  },
  description: {
    flex: 1
  }

});
