import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';

import RecommendedShops from './recommended';
import DummyFlatList from './../components/dummy-flatlist';

class FeaturedScreen extends Component {
  static navigationOptions = {
    title: 'Featured'
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <RecommendedShops />
        <DummyFlatList />
      </ScrollView>
    );
  }
}

export default FeaturedScreen;
