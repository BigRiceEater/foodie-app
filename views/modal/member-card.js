import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MemberCard extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modal} />
        <Text>Member</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  modal: {
    position: 'absolute',
    backgroundColor: 'grey',
    top: '10%',
    bottom: '10%',
    left: '10%',
    right: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  }
});

export default MemberCard;
