import React from 'react';
import { TabNavigator } from 'react-navigation';
import { HomeStack, SearchStack} from './stackNavigator';
import TabBarBottom from '../components/elements/TabBarBottom';
import TabBarIcon from '../components/elements/TabBarIcon';
import SvgMateri from '../../assets/svgs/Materi';
import SvgMateria from '../../assets/svgs/Materia';
// import SvgSoal from '../../assets/svgs/Soal';
// import SvgSoala from '../../assets/svgs/Soala';

const COLOR_DARK_GREY = '#797979';
const COLOR_RED = '#F93939';
const COLOR_GREY = '#bdbdbd';
const COLOR_WHITE = '#ffffff';

const createTab = ({ stack, label, image, iconStyle, badge }) => ({
  screen: stack,
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon
        isActive={tintColor === COLOR_RED}
        label={label}
        icon={tintColor === COLOR_RED ? image.active : image.inactive}
        iconStyle={[iconStyle, { height: 50, width: 50, tintColor }]}
        badge={badge}
        navigation={navigation}
      />
    )
  })
});

const navigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: true,
  lazy: true,
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: COLOR_RED,
    inactiveTintColor: COLOR_GREY,
    style: {
      borderTopWidth: 0,
      justifyContent: 'space-between',
      backgroundColor: COLOR_WHITE,
      height: 60
    },
    labelStyle: {
      color: COLOR_DARK_GREY
    },
    tabStyle: {},
    indicatorStyle: {
      backgroundColor: COLOR_WHITE
    }
  }
};

const createTabNavigator = (tabDefinations = []) => {
  const tabs = tabDefinations.map(createTab);
  return new TabNavigator(tabs, navigatorConfig);
};

export const AppStack = createTabNavigator([
  {
    label: 'Materi',
    stack: HomeStack,
    image: {
      active: <SvgMateri/>,
      inactive: <SvgMateria/>
    }
  }
]);

export default { AppStack };
