// @flow
import React, { Component } from "react";
import { FlatList, StatusBar, Text, Button, Image, Platform, TextInput, TouchableHighlight } from "react-native";
import { Screen, View, Title, NavigationBar, Icon } from "@shoutem/ui";
import { Ionicons } from "@expo/vector-icons";
import DreamCard from "../../components/DreamCard";
import DreamDetail from "../../components/DreamDetail";
import Modal from "react-native-modal";
import colors from "../../colors";

export default class FlowPage extends Component {
	static navigationOptions = ({ navigation }) => ({
		tabBarIcon: ({ tintColor }) => <Ionicons name="ios-cloudy-night" size={30} color={tintColor} />
	});
	state = {
		isModalVisible: false
	};

	_showModal = () => this.setState({ isModalVisible: true });

	_hideModal = () => this.setState({ isModalVisible: false });
	render() {
		const { data, navToDreamPage } = this.props;
		return (
			<Screen>
				<StatusBar barStyle="dark-content" />
				<View
					style={{
						backgroundColor: "transparent",
						marginTop: Platform.OS === "ios" ? 28 : 38,
						height: 32,
						alignItems: "center",
						justifyContent: "center",
						position: "absolute",
						top: 0,
						left: 0,
						right: 0
					}}
				>
					<View
						styleName="rounded-corners"
						style={{
							marginTop: Platform.OS === "android" ? 20 : 0,
							alignSelf: "flex-start",

							borderRadius: 10,
							borderColor: "transparent",
							backgroundColor: "#DCDCDE",
							left: 0,
							right: 0,
							width: "100%",
							flexDirection: "row"
						}}
					>
						<Ionicons name="ios-search" size={20} style={{ color: "#97989D", margin: 5 }} />
						<TextInput
							style={{
								width: "100%",
								margin: 5

								//	left: Platform.OS === "ios" ? -65 : 0,
							}}
							placeholder={"Search"}
						/>
					</View>
				</View>
				<FlatList
					data={data}
					style={{ marginTop: 60 }}
					keyExtractor={(item, index) => item.id}
					renderItem={({ item }) => (
						<DreamCard
							id={item.id}
							author={item.author}
							avatar={item.avatar}
							image={item.image}
							title={item.title}
							date={item.date}
							likesCount={item.likesCount}
							commentsCount={item.commentsCount}
							interpetsCount={item.interpetsCount}
							onPress={this._showModal}
						/>
					)}
				/>
				<Modal
					style={{
						margin: 0,
						backgroundColor: "white"
					}}
					isVisible={this.state.isModalVisible}
				>
					<DreamDetail id={1} />
				</Modal>
			</Screen>
		);
	}
}
