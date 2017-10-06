import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { dimensionRelativeToIphone, colors } from "../config";
import { textStyles } from "../styles";
const window = Dimensions.get("window");
const styles = StyleSheet.create({
	button: {
		backgroundColor: "transparent",
		width: dimensionRelativeToIphone(120, window.width),
		height: 82,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10
	},
	icon: {
		textAlign: "center",
		textAlignVertical: "center",
		marginVertical: 15
	},
	text: {
		textAlign: "center"
	}
});
export const CardIconButton = props => {
	const { onPress, text, icon, iconSize, color } = props;
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Ionicons name={icon} size={iconSize} color={color} style={styles.icon} />
			<Text style={[textStyles.caption, styles.text, { color: color }]}>{text}</Text>
		</TouchableOpacity>
	);
};

CardIconButton.defaultProps = {
	iconSize: 24,
	color: "white"
};

CardIconButton.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.string.isRequired,
	iconSize: PropTypes.number,
	color: PropTypes.string,
	onPress: PropTypes.func.isRequired
};
