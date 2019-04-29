import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

import axios from 'axios';

const ShopCard = (props) => {
  const { title, imageUrl } = props.data;
  return (
    <View style={styles.shop}>
      <Image style={{ width: 150, height: 200 }} source={{ uri: imageUrl }} />
      <Text numberOfLines={1} style={styles.shopTitle}>
        {title}
      </Text>
    </View>
  );
};

class RecommendedShops extends Component {
  state = {
    shops: [],
    api:
      'https://my-json-server.typicode.com/bigriceeater/food-restaurant-data/restaurants'
  };
  render() {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={this.state.shops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ShopCard data={item} />}
      />
    );
  }

  componentDidMount() {
    axios.get(this.state.api).then((res) => {
      this.setState({ shops: res.data });
    });
  }
}

const styles = StyleSheet.create({
  shop: {
    margin: 10
  },
  shopTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#FFFFFFCC'
  }
});

export default RecommendedShops;
