// @flow
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
	bigButtonCont: {
		backgroundColor: colors.authText,
		height: 50,
		justifyContent: "center",
		marginTop: 5
	},
	bigButton: {
		color: colors.gradientColorTwo,
		textAlign: "center",
		textShadowColor: colors.gradientColorTwo,
		paddingHorizontal: 10,
		fontSize: 16
	},
	bigButtonTransCont: {
		backgroundColor: "transparent",
		height: 50,
		justifyContent: "center",
		marginTop: 5
	},
	bigButtonTrans: {
		color: colors.authText,
		textAlign: "center",
		textShadowColor: colors.authText,
		paddingHorizontal: 10,
		fontSize: 16
	}
});

const BigButton = props => {
	const { activeOpacity, enabled, onPress, text, transparent } = props;
	const contStyle = transparent ? styles.bigButtonTransCont : styles.bigButtonCont;
	const elStyle = transparent ? styles.bigButtonTrans : styles.bigButton;
	return (
		<TouchableOpacity activeOpacity={0.5} enabled={enabled} onPress={onPress} style={contStyle}>
			<Text style={elStyle}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

BigButton.defaultProps = {
	activeOpacity: 0.5,
	enabled: true,
	transparent: false
};

BigButton.propTypes = {
	activeOpacity: PropTypes.number,
	enabled: PropTypes.bool,
	transparent: PropTypes.bool,
	onPress: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
};
export default BigButton;
