import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BlurOverlay, {
  closeOverlay,
  openOverlay
} from 'react-native-blur-overlay';

class MemberCard extends Component {
  static navigationOptions = { header: null };

  renderBlurChilds = () => {
    return (
      <View>
        <Text style={{ color: 'red' }}>Hi</Text>;
      </View>
    );
  };

  componentDidMount() {
    openOverlay();
  }

  render() {
    return (
      // <View style={styles.container}>
      <BlurOverlay
        radius={14}
        downsampling={2}
        brightness={-200}
        customStyles={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={() => {
          closeOverlay();
          this.props.onPress();
        }}
        blurStyle='light'
        // children={this.renderBlurChilds}
      />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
