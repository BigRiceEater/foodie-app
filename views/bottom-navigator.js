import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Routes from './routes';
import FoodieTabBar from './foodie-tab-bar';

const TabNavigator = createBottomTabNavigator(Routes, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Entypo;
      let iconName;
      // case-sensitive!
      if (routeName === 'Featured') {
        iconName = 'home';
      } else if (routeName === 'Settings') {
        IconComponent = Ionicons;
        iconName = 'ios-options';
      } else if (routeName === 'Shops') {
        iconName = 'shop';
      } else if (routeName === 'Inbox') {
        IconComponent = FontAwesome;
        iconName = 'inbox';
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    }
  }),
  tabBarComponent: FoodieTabBar,
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  }
});

export default TabNavigator;
