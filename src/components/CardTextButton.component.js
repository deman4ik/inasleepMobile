import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { colors } from "../config";
import { textStyles } from "../styles";
const styles = StyleSheet.create({
	text: {
		lineHeight: 16,
		letterSpacing: 0.5
	}
});
export const CardTextButton = props => {
	const { onPress, text, icon, iconSize, color } = props;
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={[textStyles.text, styles.text, { color: color }]}>{text}</Text>
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
