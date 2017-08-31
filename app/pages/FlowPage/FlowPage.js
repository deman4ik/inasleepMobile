// @flow
import React, { Component } from "react";
import { FlatList, StatusBar, Text, View, Button, Image, TextInput } from "react-native";
import { Title, NavigationBar, Icon } from "@shoutem/ui";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../colors";

export default class FlowPage extends Component {
	static navigationOptions = {
		headerLeft: <TextInput style={{ marginHorizontal: 10, width: 200 }} placeholder={"Search"} />,
		headerRight: <Icon style={{ marginHorizontal: 10 }} name="search" />,
		headerStyle: { backgroundColor: "white" },
		tabBarIcon: ({ tintColor }) => <Ionicons name="ios-cloudy-night" size={30} color={tintColor} />
	};
	render() {
		const { data, navToDreamPage } = this.props;
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
				<StatusBar barStyle="dark-content" />
				<FlatList
					data={data}
					keyExtractor={(item, index) => item.id}
					renderItem={({ item }) => <Text>{item.text}</Text>}
				/>
			</View>
		);
	}
}
