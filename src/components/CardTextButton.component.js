import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { colors } from "../config";
import { textStyles } from "../styles";

export const CardTextButton = props => {
	const { onPress, text, icon, iconSize, color } = props;
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={[textStyles.text, { color: color }]}>{text}</Text>
		</TouchableOpacity>
	);
};

CardTextButton.defaultProps = {
	color: "white"
};

CardTextButton.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	onPress: PropTypes.func.isRequired
};
