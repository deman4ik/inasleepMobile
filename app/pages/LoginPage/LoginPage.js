// @flow
import React, { Component } from "react";
import { View, StatusBar, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import * as Expo from "expo";
import Brand from "../../components/Brand";
import UnderlinedTextInput from "../../components/UnderlinedTextInput";
import BigButton from "../../components/BigButton";
import colors from "../../colors";

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
				style={{ flex: 1, justifyContent: "flex-end" }}
			>
				<KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: "space-between" }}>
					<StatusBar barStyle="light-content" />
					<Brand style={{ flex: 1 }} />

					<View style={{ flex: 2, justifyContent: "space-between" }}>
						<View
							style={{
								flex: 1,
								justifyContent: "center"
							}}
						>
							<UnderlinedTextInput placeholder="Username or Email" onChangeText={onSetNameOrEmail} />

							<UnderlinedTextInput placeholder="Password" onChangeText={onSetPassword} password={true} />
						</View>

						<View style={{ flex: 1, justifyContent: "flex-end", marginHorizontal: 10 }}>
							<ActivityIndicator animating={isLoggingIn} color={colors.authText} />
							<BigButton
								enabled={!isLoggingIn}
								onPress={navToRemindPassPage}
								text="Forgot password"
								transparent={true}
							/>

							<BigButton enabled={!isLoggingIn} onPress={onLogin} text="Login" />

							<BigButton
								enabled={!isLoggingIn}
								onPress={navToRegisterPage}
								text="No Account? Register!"
								transparent={true}
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			</Expo.LinearGradient>
		);
	}
}
