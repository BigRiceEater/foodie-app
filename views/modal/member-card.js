import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BlurOverlay, {
  closeOverlay,
  openOverlay
} from 'react-native-blur-overlay';

class MemberCard extends Component {
  static navigationOptions = { header: null };

  renderBlurChilds = () => {
    return <Text>Hi</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <BlurOverlay
          radius={14}
          downsampling={2}
          brightness={-200}
          customStyles={{ alignItems: 'center', justifyContent: 'center' }}
          blurStyle='dark'
          children={this.renderBlurChilds()}
        />
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
