import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import axios from 'axios';

import ShopCard from './shop-card';

const EmptyList = () => (
  <View>
    <Text
      style={{
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'lightgrey',
        fontSize: 20
      }}>
      Oops, we couldn't get any restaurants
    </Text>
  </View>
);

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
        ListEmptyComponent={<EmptyList />}
      />
    );
  }

  componentDidMount() {
    axios
      .get(this.state.api)
      .then((res) => {
        console.log(res.data);
        this.setState({ shops: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default RecommendedShops;
