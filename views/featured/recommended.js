import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';

import ShopCard from './shop-card';

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

export default RecommendedShops;
