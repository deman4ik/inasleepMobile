// @flow
import React, { Component } from "react";
import { FlatList, StatusBar, Text, View, Button, Image } from "react-native";

import colors from "../../colors";

export default class FlowPage extends Component {
	static navigationOptions = {
		//	headerLeft: <Icon size={26} color={"white"} style={{ paddingHorizontal: 10 }} name="access-alarms" />,
		title: "Inasleep",
		headerTintColor: "white",
		headerTitle: (
			<Image style={{ height: 40 }} resizeMode={"contain"} source={require("../../../images/logo_white.png")} />
		),
		//headerRight: <Icon size={26} color={"white"} style={{ paddingHorizontal: 10 }} name="add-circle-outline" />,
		headerStyle: { backgroundColor: colors.blueGray }
	};
	render() {
		const { data, navToDreamPage } = this.props;
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<StatusBar barStyle="light-content" />
				<FlatList
					data={data}
					keyExtractor={(item, index) => item.id}
					renderItem={({ item }) => <Text>item.text</Text>}
				/>
			</View>
		);
	}
}
