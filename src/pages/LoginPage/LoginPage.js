// @flow
import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import * as Expo from "expo";
import { View, TextInput } from "@shoutem/ui";
import { Brand, BigButton } from "../../components";

export default class LoginPage extends Component {
	//TODO: onSubmitEditing повесить focus на TextInput с паролем
	// когда https://github.com/shoutem/ui/pull/280 попадет в мастер
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
			<View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "white" }}>
				<StatusBar barStyle="dark-content" />
				<Brand style={{ flex: 1 / 2 }} />
				<KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: "space-between" }}>
					<View style={{ flex: 2, justifyContent: "space-between" }}>
						<View
							style={{
								flex: 1,
								justifyContent: "center"
							}}
						>
							<TextInput
								placeholder="Username or Email"
								onChangeText={onSetNameOrEmail}
								returnKeyType="next"
							/>

							<TextInput
								placeholder="Password"
								onChangeText={onSetPassword}
								password={true}
								returnKeyType="done"
								onSubmitEditing={onLogin}
							/>
						</View>

						<View style={{ flex: 1, justifyContent: "center", marginHorizontal: 10 }}>
							<ActivityIndicator animating={isLoggingIn} color={"black"} />

							<BigButton enabled={!isLoggingIn} onPress={onLogin} text="Login" styleName="secondary" />

							<View styleName="horizontal">
								<BigButton
									enabled={!isLoggingIn}
									onPress={navToRemindPassPage}
									text="Forgot password"
									styleName="full-width clear"
								/>
								<BigButton
									enabled={!isLoggingIn}
									onPress={navToRegisterPage}
									text="No Account? Register!"
									styleName="full-width clear"
								/>
							</View>
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}
