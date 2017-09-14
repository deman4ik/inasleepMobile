// @flow
import React, { Component } from "react";
import { FlatList, StatusBar, Text, Button, Image, Platform, TextInput } from "react-native";
import { Screen, View, Title, NavigationBar, Icon } from "@shoutem/ui";
import { Ionicons } from "@expo/vector-icons";
import DreamCard from "../../components/DreamCard";
import colors from "../../colors";

export default class FlowPage extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: null,
		headerTitle: (
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
		),
		headerRight: null,
		/*	headerRight: (
			<Icon style={{ marginHorizontal: 10, paddingTop: Platform.OS === "android" ? 20 : 0 }} name="search" />
		),*/
		headerStyle: { backgroundColor: "white" },
		tabBarIcon: ({ tintColor }) => <Ionicons name="ios-cloudy-night" size={30} color={tintColor} />
	});
	render() {
		const { data, navToDreamPage } = this.props;
		return (
			<Screen styleName="paper">
				<StatusBar barStyle="dark-content" />

				<FlatList
					data={data}
					//style={{ paddingTop: 90 }}
					keyExtractor={(item, index) => item.id}
					renderItem={({ item }) => (
						<DreamCard
							id={item.id}
							author={item.author}
							avatar={item.avatar}
							image={item.image}
							title={item.title}
							likesCount={item.likesCount}
							commentsCount={item.commentsCount}
						/>
					)}
				/>
			</Screen>
		);
	}
}
