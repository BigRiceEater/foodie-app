import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

class TabButton extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.button}>{this.props.children}</View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    top: -10,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor: 'tomato',
    borderRadius: 50
  }
});

export default TabButton;
