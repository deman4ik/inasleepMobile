import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config";
import { textStyles } from "../styles";
const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 0,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: colors.white,
		paddingHorizontal: 15,
		height: 65
	},
	icon: {
		color: "#222222",
		textAlign: "center",
		textAlignVertical: "center",
		marginRight: 15
	},
	rightIcon: {
		color: "#222222",
		textAlign: "center",
		textAlignVertical: "center",

		opacity: 0.5
	},
	text: {
		color: "#666666",
		flex: 1
	}
});
export const IconTextRow = props => {
	const { icon, iconRight, text, onPress } = props;
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			{icon !== null && <Ionicons size={22} name={icon} style={styles.icon} />}
			{text !== null && <Text style={[textStyles.text, styles.text]}>{text}</Text>}
			{iconRight !== null && <Ionicons size={20} name={iconRight} style={styles.rightIcon} />}
		</TouchableOpacity>
	);
};

IconTextRow.defaultProps = {
	icon: null,
	iconRight: null,
	text: null
};

IconTextRow.propTypes = {
	icon: PropTypes.string,
	iconRight: PropTypes.string,
	text: PropTypes.string,
	onPress: PropTypes.func.isRequired
};