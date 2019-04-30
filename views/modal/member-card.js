import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import BlurOverlay, {
  closeOverlay,
  openOverlay
} from 'react-native-blur-overlay';

import MemberFab from './../member-fab';

class MemberCard extends Component {
  static navigationOptions = { header: null };

  renderBlurChilds() {
    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.fab}>
            <MemberFab onPress={this.props.onFabPress} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    openOverlay();
  }

  render() {
    return (
      <BlurOverlay
        radius={14}
        downsampling={2}
        brightness={-200}
        customStyles={{
          flex: 1
        }}
        onPress={() => {
          closeOverlay();
          this.props.onPress();
        }}
        blurStyle='light'
        children={this.renderBlurChilds()}
      />
    );
  }
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'lightcoral'
  },
  container: { flex: 1, backgroundColor: 'lightgreen' },
  fab: {
    position: 'absolute',
    bottom: 17,
    right: 10
  }
});

export default MemberCard;
