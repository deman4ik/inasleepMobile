// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";

export default class DiaryPage extends Component {
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
