// @flow
import React from "react";
import { View, Image } from "react-native";

export const Brand = props => {
	const { style } = props;
	return (
		<View style={{ justifyContent: "flex-end", alignItems: "center", ...style }}>
			<Image style={{ height: 100 }} resizeMode={"contain"} source={require("../assets/bw_logo.png")} />
		</View>
	);
};
