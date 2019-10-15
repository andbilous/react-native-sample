import React, { Component } from 'react';
import { View, StyleSheet, FlatList,Text,Image } from 'react-native';

const data=[];
const length=100;

  for(let i=0;i<length;i++){
    data.push(
      {number:i+1,firstName:`Name${Math.floor(Math.random()*100)}`,lastName:'Doe',pictureNumber:4}
      )
  }

export default class SampleFlatList extends Component {
  renderItem({ item, index }) {
    return (
      <View key={index} style={styles.listItem}>
        <Text>Number : {item.number}</Text>
        <Text>Firstname : {item.firstName}</Text>
        <Text>Lastname : {item.lastName}</Text>
        <Image
          style={styles.image}
          source={{uri: `https://picsum.photos/id/${Math.floor(Math.random()*100)}/150/150`}}
        />
      </View>
      )
  }
  render () {
    return (
      <FlatList
        numColumns={2}
      data={data}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index.toString()}
    />);
  }
}

const styles = StyleSheet.create({
  listItem:{
    flex: 1,
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 304,
    maxHeight:304,
    backgroundColor: '#CCC',
  },
  image:{
    width: 180,
    height: 250
  }
});
