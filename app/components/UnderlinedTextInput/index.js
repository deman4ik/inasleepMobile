// @flow
import React from "react";
import PropTypes from "prop-types";
import { TextInput, View } from "react-native";
import styles from "../../styles";
import colors from "../../styles/colors";

const UnderlinedTextInput = props => {
	const { onChangeText, placeholder, placeholderTextColor } = props;

	return (
		<View style={styles.authTextInputCont}>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={placeholderTextColor || colors.authText}
				onChangeText={text => onChangeText(text)}
				style={styles.authTextInput}
			/>
		</View>
	);
};

UnderlinedTextInput.propTypes = {
	onChangeText: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	placeholderTextColor: PropTypes.string
};
export default UnderlinedTextInput;
