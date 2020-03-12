import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import OnBoarding from '../screens/OnBoarding';
import LogIn from '../screens/LogIn';
import Register from '../screens/Register';
import Materi from '../screens/Materi';
import Quiz from '../screens/Quiz';
import Ujian from '../screens/Ujian';
import Video from '../screens/Video';
import About from '../screens/About';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Materi: {
      screen: Materi,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Ujian: {
      screen: Ujian,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Video: {
      screen: Video,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const LogInStack = StackNavigator(
  {
    Home: {
      screen: LogIn,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const RegisterStack = StackNavigator(
  {
    Register: {
      screen: Register,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const MateriStack = StackNavigator(
  {
    Register: {
      screen: Materi,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);