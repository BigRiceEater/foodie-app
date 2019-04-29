import React, { Component } from 'react';
import { View, Text } from 'react-native';

import RecommendedShops from './recommended';

class FeaturedScreen extends Component {
  static navigationOptions = {
    title: 'Featured'
  };
  render() {
    return (
      <View>
        <RecommendedShops />
      </View>
    );
  }
}

export default FeaturedScreen;
