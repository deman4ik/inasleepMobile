// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class NotificationsPage extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications-outline" size={30} color={tintColor} />
	};
	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "red"
				}}
			>
				<Text style={{ fontSize: 40, color: "white" }}>Notifications Page</Text>
			</View>
		);
	}
}
