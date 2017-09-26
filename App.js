// @flow
import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import * as Expo from "expo";
import { addNavigationHelpers } from "react-navigation";
import { Provider, connect } from "react-redux";
import { persistStore } from "redux-persist";
import createEncryptor from "redux-persist-transform-encrypt";
import md5 from "md5";
import configureStore from "./src/store/configureStore";
import AppNavigator from "./src/navigation/navigator";
import { configureLocale } from "./src/utils";
import { determineLanguage } from "./src/locale";

const AppWithNavigationState = connect(state => ({
	nav: state.nav
}))(({ dispatch, nav }) => <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />);

const Store = configureStore();

export default class App extends Component {
	static async initLocale() {
		const language = await determineLanguage();

		configureLocale(language);
	}
	constructor() {
		super();

		this.state = {
			isReady: false,
			rehydrated: false
		};
	}

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

		const encryptor = createEncryptor({
			secretKey: md5(Expo.Constants.deviceId)
		});

		persistStore(Store, { storage: AsyncStorage, transforms: [encryptor] }, () => {
			this.setState({ rehydrated: true });
		});

		this.constructor.initLocale();

		this.setState({ isReady: true });
	}
	render() {
		if (!this.state.isReady || !this.state.rehydrated) {
			return <Expo.AppLoading />;
		}
		return (
			<Provider store={Store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
