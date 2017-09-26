// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";

export default class NotificationsPage extends Component {
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
