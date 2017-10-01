// @flow
import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { ParallaxScroll } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { translate } from "../../utils";

export default class DreamPage extends Component {
	render() {
		const { dream } = this.props.navigation.state.params;
		const { auth, navigation } = this.props;
		const { language } = auth;
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "stretch"
				}}
			>
				<ParallaxScroll
					renderContent={() => (
						<View
							style={{
								flex: 1,
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<Text style={{ color: "white" }}>{dream.title}</Text>
						</View>
					)}
					stickyTitle={dream.title}
					navigateBack
					navigation={navigation}
				>
					<Text>{dream.text}</Text>
				</ParallaxScroll>
			</View>
		);
	}
}
