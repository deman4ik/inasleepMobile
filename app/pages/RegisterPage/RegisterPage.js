// @flow
import React, { Component } from "react";
import { View, StatusBar, TextInput, Button, KeyboardAvoidingView } from "react-native";
import * as Expo from "expo";
import colors from "../../styles/colors";
import appStyles from "../../styles";

export default class RegisterPage extends Component {
	render() {
		const { isLoading, onSetEmail, onSetName, onSetPassword, onRegister, navToLoginPage } = this.props;
		return (
			<Expo.LinearGradient
				colors={[colors.gradientColorOne, colors.gradientColorTwo]}
				style={{ flex: 1, justifyContent: "center" }}
			>
				<KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: "center" }}>
					<StatusBar barStyle="light-content" />

					<View style={{ justifyContent: "flex-start" }}>
						<View style={{ justifyContent: "flex-start" }}>
							<TextInput placeholder="Email" onChangeText={text => onSetEmail(text)} />
							<TextInput placeholder="Username" onChangeText={text => onSetName(text)} />
							<TextInput
								password={true}
								placeholder="Password"
								onChangeText={text => onSetPassword(text)}
							/>
						</View>

						<Button onPress={onRegister} title={"Create Account"} />
						<Button enabled={!isLoading} onPress={navToLoginPage} title="Already has Account? Log in!" />
					</View>
				</KeyboardAvoidingView>
			</Expo.LinearGradient>
		);
	}
}
