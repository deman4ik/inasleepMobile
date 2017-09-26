// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class DiaryPage extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => <Ionicons name="ios-book-outline" size={30} color={tintColor} />
	};
	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "white"
				}}
			>
				<Text style={{ fontSize: 40, color: "black" }}>Diary Page</Text>
			</View>
		);
	}
}
