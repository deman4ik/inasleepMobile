// @flow
import React, { Component } from "react";
import { View, TextInput, Button, StatusBar, KeyboardAvoidingView } from "react-native";
import * as Expo from "expo";
import colors from "../../styles/colors";
import appStyles from "../../styles";

export default class LoginPage extends Component {
	static navigationOptions = {
		header: {
			visible: false
		}
	};
	render() {
		const {
			isLoggingIn,
			onSetNameOrEmail,
			onSetPassword,
			onLogin,
			navToRegisterPage,
			navToRemindPassPage
		} = this.props;
		return (
			<Expo.LinearGradient
				colors={[colors.gradientColorOne, colors.gradientColorTwo]}
				style={{ flex: 1, justifyContent: "center" }}
			>
				<KeyboardAvoidingView behavior="padding">
					<StatusBar barStyle="light-content" />

					<View style={{ justifyContent: "flex-start" }}>
						<View style={{ justifyContent: "flex-start", paddingBottom: 10 }}>
							<TextInput
								placeholder="Username or Email"
								onChangeText={text => onSetNameOrEmail(text)}
								style={{ paddingBottom: 20 }}
							/>
							<TextInput
								secureTextEntry={true}
								placeholder="Password"
								onChangeText={text => onSetPassword(text)}
								style={{ paddingBottom: 20 }}
							/>
						</View>
						<Button enabled={!isLoggingIn} onPress={navToRemindPassPage} title="Forgot password" />
						<Button enabled={!isLoggingIn} title={"Login"} onPress={onLogin} />
						<Button enabled={!isLoggingIn} onPress={navToRegisterPage} title="No Account? Register!" />
					</View>
				</KeyboardAvoidingView>
			</Expo.LinearGradient>
		);
	}
}
