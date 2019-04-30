import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TabButton from './tab-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MemberTabButton extends Component {
  state = {};

  handlePress = () => {
    const { navigation } = this.props;
    navigation.navigate('MemberCard');
  };

  render() {
    return (
      <View style={styles.button}>
        <TabButton onPress={this.handlePress}>
          <FontAwesome name='user' size={35} color='white' />
        </TabButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: { position: 'relative', top: -40, right: 10 }
});

export default MemberTabButton;
