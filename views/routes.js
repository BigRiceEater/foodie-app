import React, { Component } from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import FeaturedScreen from './featured/screen';
import SettingsScreen from './settings';
import InboxScreen from './inbox';
import ShopsScreen from './shops';

import MemberTabButton from './member-tab-button';

const noShadowHeaderOptions = {
  headerTintColor: 'tomato',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0
  }
};

const Routes = {
  Featured: createStackNavigator(
    { Featured: FeaturedScreen },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: noShadowHeaderOptions
    }
  ),
  Shops: ShopsScreen,
  Inbox: InboxScreen,
  Settings: SettingsScreen,
  Member: {
    screen: () => null, //empty screen
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: <MemberTabButton navigation={navigation} />,
      tabBarLabel: <Text />
    })
  }
};

export default Routes;
