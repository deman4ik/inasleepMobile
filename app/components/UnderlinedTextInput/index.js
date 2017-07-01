// @flow
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
	authTextInputCont: {
		borderBottomWidth: 1,
		borderBottomColor: colors.authText,
		marginHorizontal: 10,
		marginTop: 10
	},
	authTextInput: {
		color: colors.authText,
		minHeight: 35
	}
});

const UnderlinedTextInput = props => {
	const { onChangeText, placeholder, placeholderTextColor, password } = props;

	return (
		<View style={styles.authTextInputCont}>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={placeholderTextColor || colors.authText}
				onChangeText={text => onChangeText(text)}
				style={styles.authTextInput}
				password={password}
			/>
		</View>
	);
};
UnderlinedTextInput.defaultProps = {
	password: false
};
UnderlinedTextInput.propTypes = {
	onChangeText: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	placeholderTextColor: PropTypes.string,
	password: PropTypes.bool
};
export default UnderlinedTextInput;
