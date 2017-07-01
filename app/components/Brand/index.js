// @flow
import React from "react";
import { View, Image } from "react-native";

const Brand = props => {
	const { style } = props;
	return (
		<View style={{ justifyContent: "flex-end", alignItems: "center", ...style }}>
			<Image style={{ height: 100 }} resizeMode={"contain"} source={require("../../../images/logo_white.png")} />
		</View>
	);
};

export default Brand;
