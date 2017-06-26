import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FlowPage from "../pages/FlowPage";
import DreamPage from "../pages/DreamPage";
import SearchPage from "../pages/SearchPage";
import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import colors from "../styles/colors";

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
		tabBarPosition: "bottom"
		//tabBarOptions: {}
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
		initialRouteName: "Auth"
	}
);

export default AppNavigator;
