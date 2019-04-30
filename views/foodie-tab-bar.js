import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, withOrientation } from 'react-navigation';

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
  },
  modal: {
    backgroundColor: 'lightgreen',
    opacity: 0.4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const FoodieTabBar = (props) => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <SafeAreaView>
      <Modal visible transparent style={S.modalContainer}>
        <View style={S.modal}>
          <View style={{ width: 100, height: 100, backgroundColor: 'white' }}>
            <Text style={{ textAlign: 'center' }}>Hi</Text>
          </View>
        </View>
      </Modal>
      <View style={S.container}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

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
        <MemberTabButton navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default FoodieTabBar;
