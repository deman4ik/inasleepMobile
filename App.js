// @flow
import React, { Component } from "react";
import { NavigationActions, addNavigationHelpers, StackNavigator } from "react-navigation";
import { Provider, connect } from "react-redux";
import configureStore from "./app/store/configureStore";
import * as Expo from "expo";
import AppNavigator from "./app/navigation/navigator";

const AppWithNavigationState = connect(state => ({
	nav: state.nav
}))(({ dispatch, nav }) => <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />);

const Store = configureStore();

export default class App extends Component {
	state = {
		fontsAreLoaded: false
	};

	async componentWillMount() {
		await Expo.Font.loadAsync({
			"Rubik-Black": require("./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf"),
			"Rubik-BlackItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf"),
			"Rubik-Bold": require("./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf"),
			"Rubik-BoldItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf"),
			"Rubik-Italic": require("./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf"),
			"Rubik-Light": require("./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf"),
			"Rubik-LightItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf"),
			"Rubik-Medium": require("./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf"),
			"Rubik-MediumItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf"),
			"Rubik-Regular": require("./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf"),
			"rubicon-icon-font": require("./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf")
		});

		this.setState({ fontsAreLoaded: true });
	}
	render() {
		if (!this.state.fontsAreLoaded) {
			return <Expo.AppLoading />;
		}
		return (
			<Provider store={Store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
