import React from "react";
import { Text } from "react-native";

const Label = props => {
	const { text } = props;
	return <Text {...props}>{text}</Text>;
};

export default Label;
