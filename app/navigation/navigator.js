import React from 'react';
import {
  StackNavigator, TabNavigator
} from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import FlowPage from '../pages/FlowPage'
import DreamPage from '../pages/DreamPage'
import SearchPage from '../pages/SearchPage'
import NotificationsPage from '../pages/NotificationsPage'
import ProfilePage from '../pages/ProfilePage'
import SettingsPage from '../pages/SettingsPage'
import colors from '../styles/colors'

const AuthNavigator = StackNavigator({
  Login: { screen: LoginPage },
  Register: { screen: RegisterPage }
},{
headerMode: 'none',
   });

const FlowNavigator = StackNavigator({
  Flow: {screen: FlowPage},
  Dream: {screen: DreamPage}
})

const ProfileNavigator = StackNavigator(
  {
    Profile: {screen: ProfilePage},
    Dream: {screen: DreamPage},
    Settings: {screen: SettingsPage}
  }
)
const MainNavigator = TabNavigator(
  {
    Flow: {screen: FlowNavigator },
    Search: {screen: SearchPage},
    Notifications: {screen: NotificationsPage},
    Profile: {screen: ProfileNavigator}
  },
  {
    headerMode: 'screen',
    tabBarComponent: NavigationComponent,
   tabBarPosition: 'bottom',
tabBarOptions:{
  bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        Flow: {
           label: 'Home',
           icon: <Icon size={24} color={colors.blueGrayLight} name="home" />,
           activeIcon: <Icon size={24} color="white" name="home" />,
           barBackgroundColor: colors.gradientColorOne
        },
        Search: {
           label: 'Search',
           icon: <Icon size={24} color={colors.blueGrayLight}  name="search" />,
           activeIcon: <Icon size={24} color="white" name="search" />,
           barBackgroundColor: colors.gradientColorTwo
        },
        Notifications: {
           label: 'Notifications',
           icon: <Icon size={24} color={colors.blueGrayLight} name="notifications" />,
           activeIcon: <Icon size={24} color="white" name="notifications" />,
           barBackgroundColor: colors.gradientColorOne
        },
        Profile: {
           label: 'Profile',
           icon: <Icon size={24} color={colors.blueGrayLight} name="person" />,
           activeIcon: <Icon size={24} color="white" name="person" />,
           barBackgroundColor: colors.gradientColorTwo
        }
      }
  }
}
}
);

const AppNavigator = StackNavigator(
  {
    Auth: { screen: AuthNavigator},
    Main: { screen: MainNavigator}
  },{
  headerMode: 'none',
  initialRouteName : 'Main'
     }
);


export default AppNavigator;
