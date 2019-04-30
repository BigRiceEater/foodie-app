import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import RecommendedShops from './recommended';
import DummyFlatList from './../components/dummy-flatlist';

class FeaturedScreen extends Component {
  static navigationOptions = {
    title: 'Featured'
  };
  render() {
    return (
      <ScrollView>
        <RecommendedShops />
        <DummyFlatList />
      </ScrollView>
    );
  }
}

export default FeaturedScreen;
