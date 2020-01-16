import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack,LogIn, LogInStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    LogIn: LogInStack,
    App: Drawer
  },
  {
    initialRouteName: 'App'
  }
);  
