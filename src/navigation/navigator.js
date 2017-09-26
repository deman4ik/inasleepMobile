import React from "react";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FlowPage from "../pages/FlowPage";
import DiaryPage from "../pages/DiaryPage";
import DreamPage from "../pages/DreamPage";
import AddDreamPage from "../pages/AddDreamPage";
import SearchPage from "../pages/SearchPage";
import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";

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
		Profile: { screen: ProfilePage },
		Dream: { screen: DreamPage }
	},
	{
		mode: "modal",
		headerMode: "none"
	}
);
const DiaryNavigator = StackNavigator({
	Diary: { screen: DiaryPage },
	Profile: { screen: ProfilePage }
});
const AddDreamNavigator = StackNavigator(
	{
		AddDream: { screen: AddDreamPage },
		Dream: { screen: DreamPage }
	},
	{ mode: "modal" }
);
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
		MyDiary: { screen: DiaryNavigator },
		Alarm: { screen: AddDreamNavigator },
		Notifications: { screen: NotificationsNavigator },
		MyProfile: { screen: ProfileNavigator }
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
			activeTintColor: "black"
		}
	}
);

const AppNavigator = StackNavigator(
	{
		Auth: { screen: AuthNavigator },
		Main: { screen: MainNavigator },
		AlarmMode: { screen: AddDreamPage }
	},
	{
		mode: "modal",
		headerMode: "none",
		initialRouteName: "Main"
	}
);

export default AppNavigator;
