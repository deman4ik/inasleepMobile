// @flow
import React, { Component } from "react";
import { FlatList, StatusBar, Text, View, Button, Image, Platform, TextInput } from "react-native";
import { Screen, Title, NavigationBar, Icon } from "@shoutem/ui";
import { Ionicons } from "@expo/vector-icons";
import DreamCard from "../../components/DreamCard";
import colors from "../../colors";

export default class FlowPage extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: null,
		headerTitle: (
			<TextInput
				style={{
					alignSelf: "flex-start",
					borderWidth: 1,
					marginTop: Platform.OS === "android" ? 20 : 0,
					//	left: Platform.OS === "ios" ? -65 : 0,
					left: 0,
					right: 0,
					width: "100%"
				}}
				placeholder={"Search"}
			/>
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
