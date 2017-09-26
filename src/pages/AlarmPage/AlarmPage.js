// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";

export default class AlarmPage extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "black"
				}}
			>
				<Text style={{ fontSize: 40, color: "white" }}>Alarm Page</Text>
			</View>
		);
	}
}
