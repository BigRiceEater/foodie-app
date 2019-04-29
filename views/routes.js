import { createStackNavigator } from 'react-navigation';

import FeaturedScreen from './featured/screen';
import SettingsScreen from './settings';
import InboxScreen from './inbox';
import ShopsScreen from './shops';

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
  Settings: SettingsScreen
};

export default Routes;
