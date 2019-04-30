import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
class DummyFlatList extends Component {
  state = {
    items: this.genViews()
  };

  genViews() {
    const filler = new Array(10).fill(0);
    const fill = filler.map(() => ({ color: this.randomColor() }));
    return fill;
  }

  randomColor() {
    const r = `${Math.random(0, 255)}`;
    const g = `${Math.random(0, 255)}`;
    const b = `${Math.random(0, 255)}`;
    return `rgb(${r},${g},${b})`;
  }

  render() {
    return (
      <FlatList
        data={this.state.items}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: item.color, ...style.filler }} />
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
    );
  }
}

const style = StyleSheet.create({
  filler: { height: 130, margin: 10, borderRadius: 15 }
});

export default DummyFlatList;
