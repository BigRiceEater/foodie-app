import React, { Component } from 'react';
import TabButton from './tab-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MemberFab extends Component {
  state = {};
  render() {
    return (
      <TabButton onPress={this.props.onPress}>
        <FontAwesome name='user' size={35} color='white' />
      </TabButton>
    );
  }
}

export default MemberFab;
