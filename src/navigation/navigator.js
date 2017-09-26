import React from "react";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FlowPage from "../pages/FlowPage";
import DiaryPage from "../pages/DiaryPage";
import DreamPage from "../pages/DreamPage";
import AlarmPage from "../pages/AlarmPage";
import AddDreamPage from "../pages/AddDreamPage";
import SearchPage from "../pages/SearchPage";
import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";
import MyProfilePage from "../pages/MyProfilePage";
import SettingsPage from "../pages/SettingsPage";
import { colors } from "../config";

const sharedRoutes = {
	Profile: {
		screen: ProfilePage,
		navigationOptions: ({ navigation }) => ({
			title: ""
		})
	},
	Dream: {
		screen: DreamPage,
		navigationOptions: ({ navigation }) => ({
			title: ""
		})
	}
};

const AuthNavigator = StackNavigator(
	{
		Login: {
			screen: LoginPage,
			navigationOptions: {
				header: null
			}
		},
		Register: {
			screen: RegisterPage,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		headerMode: "none"
	}
);

const FlowNavigator = StackNavigator(
	{
		Flow: {
			screen: FlowPage,
			navigationOptions: {
				header: null
			}
		},
		...sharedRoutes
	},
	{
		headerMode: "screen"
	}
);
const DiaryNavigator = StackNavigator({
	Diary: { screen: DiaryPage },
	...sharedRoutes
});
/*const AlarmNavigator = StackNavigator(
	{
		AlarmPage: { screen: AlarmPage }
	},
	{ mode: "modal" }
);*/
const NotificationsNavigator = StackNavigator(
	{
		Notifications: {
			screen: NotificationsPage,
			navigationOptions: {
				header: null
			}
		},
		...sharedRoutes
	},
	{
		headerMode: "screen"
	}
);
const MyProfileNavigator = StackNavigator(
	{
		MyProfilePage: { screen: MyProfilePage },
		Settings: { screen: SettingsPage },
		...sharedRoutes
	},
	{
		headerMode: "screen"
	}
);

const MainNavigator = TabNavigator(
	{
		Flow: {
			screen: FlowNavigator,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-cloudy-night" size={30} color={tintColor} />
			}
		},
		MyDiary: {
			screen: DiaryNavigator,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-book-outline" size={30} color={tintColor} />
			}
		},
		Alarm: {
			screen: AlarmPage,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-clock-outline" size={30} color={tintColor} />
			}
		},
		Notifications: {
			screen: NotificationsNavigator,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications-outline" size={30} color={tintColor} />
			}
		},
		MyProfile: {
			screen: MyProfileNavigator,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person-outline" size={30} color={tintColor} />
			}
		}
	},
	{
		headerMode: "screen",
		tabBarComponent: TabBarBottom,
		/*tabBarComponent: ({ jumpToIndex, ...props, navigation }) =>
			<TabBarBottom
				{...props}
				jumpToIndex={index => {
					console.log(index);
					if (index === 2) {
						navigation.navigate("AlarmMode");
					} else {
						jumpToIndex(index);
					}
				}}
			/>,*/
		tabBarPosition: "bottom",

		tabBarOptions: {
			showLabel: false,
			activeTintColor: colors.primaryDark,
			inactiveTintColor: colors.grey
		}
	}
);

const AppNavigator = StackNavigator(
	{
		Auth: { screen: AuthNavigator },
		Main: { screen: MainNavigator }
	},
	{
		headerMode: "none",
		initialRouteName: "Main"
	}
);

export default AppNavigator;
