import { SwitchNavigator } from 'react-navigation';
import { HomeStack,RegisterStack, LogInStack, MateriStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    Home: HomeStack,
    LogIn: LogInStack,
    Register: RegisterStack,
    Materi: MateriStack,
    App: HomeStack
  },
  {
    initialRouteName: 'LogIn'
  }
);  
