import React, { Component } from 'react';
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
      <TabButton onPress={this.handlePress}>
        <FontAwesome name='user' size={35} color='white' />
      </TabButton>
    );
  }
}

export default MemberTabButton;
