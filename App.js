import { createAppContainer, createStackNavigator } from 'react-navigation';
import TabNavigator from './views/bottom-navigator';
import MemberCardModal from './views/modal/member-card';

const rootStack = createStackNavigator(
  {
    main: TabNavigator,
    modal: createStackNavigator({ MemberCard: MemberCardModal })
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createAppContainer(rootStack);
