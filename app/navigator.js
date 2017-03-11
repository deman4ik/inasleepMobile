import {
  StackNavigator, TabNavigator
} from 'react-navigation';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import FlowPage from './components/FlowPage'
import DreamPage from './components/DreamPage'
import SearchPage from './components/SearchPage'
import NotificationsPage from './components/NotificationsPage'
import ProfilePage from './components/ProfilePage'
import SettingsPage from './components/SettingsPage'


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
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
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
