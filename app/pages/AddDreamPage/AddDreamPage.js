// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class AddDreamPage extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => <Ionicons name="ios-clock-outline" size={26} color={tintColor} />
	};
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
				<Text style={{ fontSize: 40, color: "white" }}>Add Dream Page</Text>
			</View>
		);
	}
}
