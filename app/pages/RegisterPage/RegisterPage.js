// @flow
import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import * as Expo from "expo";
import Brand from "../../components/Brand";
import { View, TextInput } from "@shoutem/ui";
import BigButton from "../../components/BigButton";
import colors from "../../colors";

export default class RegisterPage extends Component {
	render() {
		const { isLoading, onSetEmail, onSetName, onSetPassword, onRegister, navToLoginPage } = this.props;
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
							<TextInput placeholder="Email" onChangeText={onSetEmail} />
							<TextInput placeholder="Username" onChangeText={onSetName} />
							<TextInput placeholder="Password" onChangeText={onSetPassword} password={true} />
						</View>

						<View style={{ flex: 1, justifyContent: "flex-end", marginHorizontal: 10 }}>
							<ActivityIndicator animating={isLoading} color={colors.authText} />

							<BigButton onPress={onRegister} text="Create Account" />

							<BigButton
								enabled={!isLoading}
								onPress={navToLoginPage}
								text="Already has Account? Log in!"
								transparent={true}
							/>
						</View>
					</View>
				</KeyboardAvoidingView>
			</Expo.LinearGradient>
		);
	}
}
