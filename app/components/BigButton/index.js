// @flow
import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles";

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
