import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, withOrientation } from 'react-navigation';

import MemberCard from './modal/member-card';
import MemberTabButton from './member-tab-button';

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    borderTopWidth: 1,
    borderColor: 'tomato'
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class FoodieTabBar extends Component {
  closeModal = () => this.setState({ showModal: false });

  state = {
    showModal: true
  };
  render() {
    const {
      renderIcon,
      getLabelText,
      activeTintColor,
      inactiveTintColor,
      onTabPress,
      onTabLongPress,
      getAccessibilityLabel,
      navigation
    } = this.props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
      <SafeAreaView>
        <Modal style={{ zIndex: 1 }} transparent visible={this.state.showModal}>
          <MemberCard onPress={this.closeModal} />
        </Modal>
        <View style={S.container}>
          {routes.map((route, routeIndex) => {
            const isRouteActive = routeIndex === activeRouteIndex;
            const tintColor = isRouteActive
              ? activeTintColor
              : inactiveTintColor;

            return (
              <TouchableOpacity
                key={routeIndex}
                style={S.tabButton}
                onPress={() => {
                  onTabPress({ route });
                }}
                onLongPress={() => {
                  onTabLongPress({ route });
                }}
                accessibilityLabel={getAccessibilityLabel({ route })}>
                {renderIcon({ route, focused: isRouteActive, tintColor })}

                <Text style={{ color: tintColor }}>
                  {getLabelText({ route })}
                </Text>
              </TouchableOpacity>
            );
          })}
          <MemberTabButton navigation={navigation} style={{ zIndex: 4 }} />
        </View>
      </SafeAreaView>
    );
  }
}

export default FoodieTabBar;
