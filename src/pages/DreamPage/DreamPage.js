// @flow
import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { ParallaxScroll, ViewContainer, DreamHeader } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { translate } from "../../utils";

export default class DreamPage extends Component {
	render() {
		const { dream } = this.props.navigation.state.params;
		const { auth, navigation } = this.props;
		const { language } = auth;
		return (
			<ViewContainer barColor={"light"}>
				<ParallaxScroll
					renderContent={() => <DreamHeader dream={dream} />}
					backgroundImage={dream.image}
					stickyTitle={dream.title}
					navigateBack
					navigation={navigation}
					showMenu
				>
					<Text>{dream.text}</Text>
				</ParallaxScroll>
			</ViewContainer>
		);
	}
}
