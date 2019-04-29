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
    top: -15,
    right: 7,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor: 'tomato',
    borderRadius: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5
  }
});

export default TabButton;
