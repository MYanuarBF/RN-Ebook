import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack,RegisterStack, LogInStack, MateriStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    LogIn: LogInStack,
    Register: RegisterStack,
    Materi: MateriStack,
    App: Drawer
  },
  {
    initialRouteName: 'Materi'
  }
);  
