// @flow
import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class ProfilePage extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person-outline" size={30} color={tintColor} />
	};
	render() {
		const { navToDreamPage } = this.props;
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#5D5D7F"
				}}
			>
				<Text style={{ fontSize: 40, color: "white" }}>Profile Page</Text>
				<Button onPress={navToDreamPage} title="Go To Dream Page" />
			</View>
		);
	}
}
