import React from "react";
import { View, Image, Text } from "react-native";
import colors from "../../styles/colors";
import appStyles from "../../styles";

const Brand = props => {
	return (
		<View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
			<Image style={{ height: 100 }} resizeMode={"contain"} source={require("../../../images/logo_white.png")} />
			{/**
             <Text style={appStyles.titleLabel}>Inasleep</Text>*/}
		</View>
	);
};

export default Brand;
