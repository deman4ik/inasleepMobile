// @flow
import React, { Component } from "react";
import { StyleSheet, Button } from "react-native";
import { ParallaxScroll, ViewContainer, DreamHeader, ReadMore, Divider, IconTextRow } from "../../components";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { translate } from "../../utils";
import { colors } from "../../config";
import { textStyles } from "../../styles";
import { Row, Icon, Text, Image, View, Subtitle, Caption, TextInput } from "@shoutem/ui";
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.greyLight,
		justifyContent: "flex-start"
	},
	textContainer: {
		backgroundColor: colors.white
	},
	detailContainer: {
		backgroundColor: colors.white
	},
	rowIcon: {
		color: "#222222",
		textAlign: "center",
		textAlignVertical: "center",
		marginRight: 15
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
						<Divider textLeft="ДЕТАЛИ" />

						<View style={styles.detailContainer}>
							<Row styleName="small">
								<MaterialCommunityIcons size={22} name="puzzle" style={styles.rowIcon} />
								<View style={{ flexDirection: "row" }}>
									<Text
										style={{
											paddingVertical: 5,
											marginRight: 10,
											backgroundColor: "#F2F2F2",
											color: "black",
											paddingHorizontal: 5
										}}
									>
										Лошадь
									</Text>
									<Text
										style={{
											paddingVertical: 5,
											marginRight: 10,
											backgroundColor: "#F2F2F2",
											color: "black",
											paddingHorizontal: 5
										}}
									>
										Дерево
									</Text>
									<Text
										style={{
											paddingVertical: 5,
											marginRight: 10,
											backgroundColor: "#F2F2F2",
											color: "black",
											paddingHorizontal: 5
										}}
									>
										Летать
									</Text>
								</View>
								<Icon styleName="disclosure" name="right-arrow" />
							</Row>

							<IconTextRow
								icon="ios-information-circle"
								text={`${dream.interpetsCount} интерпретации`}
								iconRight="ios-arrow-forward-outline"
								onPress={() => {
									return null;
								}}
							/>

							<IconTextRow icon="ios-person-add-outline" text="Никто не приснился" disabled />

							<IconTextRow icon="ios-people" text="Виден всем" disabled />

							<IconTextRow icon="ios-globe-outline" text={dream.location} disabled />
						</View>

						<Divider textLeft="КОММЕНТАРИИ" />
						<View style={styles.detailContainer}>
							<Row>
								<Image
									styleName="small-avatar top"
									source={{ uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png" }}
								/>
								<View styleName="vertical">
									<View styleName="horizontal space-between">
										<Subtitle>Dustin</Subtitle>
										<Caption>20 минут назад</Caption>
									</View>
									<Text styleName="multiline">
										Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever
										street art fap. Hashtag typewriter banh mi, squid keffiyeh High.
									</Text>
								</View>
							</Row>

							<Row>
								<Image
									styleName="small-avatar top"
									source={{ uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-12.png" }}
								/>
								<View styleName="vertical">
									<View styleName="horizontal space-between">
										<Subtitle>Dustin Malone</Subtitle>
										<Caption>30 минут назад</Caption>
									</View>
									<Text styleName="multiline">
										High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter
										banh mi, squid keffiyeh High. Иanjo tote bag bicycle rights.
									</Text>
								</View>
							</Row>

							<Row>
								<Image
									styleName="small-avatar top"
									source={{ uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png" }}
								/>
								<View styleName="vertical">
									<View styleName="horizontal space-between">
										<Subtitle>Malone</Subtitle>
										<Caption>40 минут назад</Caption>
									</View>
									<Text styleName="multiline">Тоже самое снилось, к чему бы это?</Text>
								</View>
							</Row>

							<Text style={{ alignSelf: "center", marginHorizontal: 10 }}>
								Посмотреть все комментарии (7)
							</Text>
							<Row>
								<Ionicons size={22} name="ios-chatboxes" style={styles.rowIcon} />
								<TextInput placeholder={"Добавить комментарий"} />
							</Row>
						</View>
					</View>
				</ParallaxScroll>
			</ViewContainer>
		);
	}
}
