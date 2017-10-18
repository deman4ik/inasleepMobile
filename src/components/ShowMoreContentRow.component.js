import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../config";
import { textStyles } from "../styles";
const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		padding: 15
	},
	text: {
		color: colors.greyDarkest
	}
});
export const ShowMoreContentRow = props => {
	const { text, count, onPress } = props;

	const getText = () => {
		if (count !== null) {
			return `${text} (${count})`;
		} else {
			return text;
		}
	};

	return (
		<TouchableOpacity style={styles.container}>
			<Text style={[textStyles.text, styles.text]}>{getText()}</Text>
		</TouchableOpacity>
	);
};
ShowMoreContentRow.defaultProps = {
	count: null
};
ShowMoreContentRow.propTypes = {
	text: PropTypes.string.isRequired,
	count: PropTypes.number,
	onPress: PropTypes.func.isRequired
};
