import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import MemberTabButton from './member-tab-button';

const S = StyleSheet.create({
  container: { flexDirection: 'row', height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' }
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
    <SafeAreaView style={S.container}>
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

            <Text style={{ color: tintColor }}>{getLabelText({ route })}</Text>
          </TouchableOpacity>
        );
      })}
      <MemberTabButton navigation={navigation} />
    </SafeAreaView>
  );
};

export default FoodieTabBar;
