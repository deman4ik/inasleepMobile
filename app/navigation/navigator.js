import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { NavigationComponent } from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FlowPage from "../pages/FlowPage";
import DreamPage from "../pages/DreamPage";
import SearchPage from "../pages/SearchPage";
import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import colors from "../styles/colors";
import styles from "../styles/extended";

const AuthNavigator = StackNavigator(
	{
		Login: { screen: LoginPage },
		Register: { screen: RegisterPage }
	},
	{
		headerMode: "none"
	}
);

const FlowNavigator = StackNavigator(
	{
		Flow: { screen: FlowPage },
		Profile: { screen: ProfilePage }
	},
	{ mode: "modal" }
);
const SearchNavigator = StackNavigator({
	Search: { screen: SearchPage },
	Profile: { screen: ProfilePage }
});
const NotificationsNavigator = StackNavigator({
	Notifications: { screen: NotificationsPage },
	Profile: { screen: ProfilePage }
});
const ProfileNavigator = StackNavigator({
	Profile: { screen: ProfilePage },
	Settings: { screen: SettingsPage }
});
const iconSize = styles.tabBar.iconSize;
const MainNavigator = TabNavigator(
	{
		Flow: { screen: FlowNavigator },
		Search: { screen: SearchNavigator },
		Notifications: { screen: NotificationsNavigator },
		MyProfile: { screen: ProfileNavigator }
	},
	{
		headerMode: "screen",
		//	tabBarComponent: NavigationComponent,
		tabBarPosition: "bottom",
		tabBarOptions: {
			/*	bottomNavigationOptions: {
				labelColor: "white",
				rippleColor: "white",
				backgroundColor: colors.blueGray,
				style: { height: 56 },
				tabs: {
					Flow: {
						label: "Home",
						icon: <Icon size={iconSize} color={colors.blueGrayLight} name="home" />,
						activeIcon: <Icon size={iconSize} color="white" name="home" />
						// barBackgroundColor: colors.gradientColorOne
					},
					Search: {
						label: "Search",
						icon: <Icon size={iconSize} color={colors.blueGrayLight} name="search" />,
						activeIcon: <Icon size={iconSize} color="white" name="search" />
						//   barBackgroundColor: colors.gradientColorTwo
					},
					Notifications: {
						label: "Notifications",
						icon: <Icon size={iconSize} color={colors.blueGrayLight} name="notifications" />,
						activeIcon: <Icon size={iconSize} color="white" name="notifications" />
						// barBackgroundColor: colors.gradientColorOne
					},
					MyProfile: {
						label: "Profile",
						icon: <Icon size={iconSize} color={colors.blueGrayLight} name="person" />,
						activeIcon: <Icon size={iconSize} color="white" name="person" />
						//   barBackgroundColor: colors.gradientColorTwo
					}
				}
			}*/
		}
	}
);

const AppNavigator = StackNavigator(
	{
		Auth: { screen: AuthNavigator },
		Main: { screen: MainNavigator },
		Dream: { screen: DreamPage }
	},
	{
		headerMode: "none",
		initialRouteName: "Main"
	}
);

export default AppNavigator;
