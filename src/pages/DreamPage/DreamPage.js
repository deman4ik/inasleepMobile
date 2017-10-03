// @flow
import React, { Component } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { ParallaxScroll, ViewContainer, DreamHeader, ReadMore } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { translate } from "../../utils";
import { colors } from "../../config";

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.greyLight,
		justifyContent: "flex-start"
	},
	textContainer: {
		backgroundColor: colors.white
	}
});
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
					<View style={styles.container}>
						<View style={styles.textContainer}>
							<ReadMore numberOfLines={5} showHide={false}>
								{dream.text}
							</ReadMore>
						</View>
					</View>
				</ParallaxScroll>
			</ViewContainer>
		);
	}
}
