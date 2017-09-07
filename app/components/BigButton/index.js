// @flow
import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "@shoutem/ui";
import colors from "../../colors";

const BigButton = props => {
	const { enabled, onPress, text, styleName } = props;

	return (
		<Button styleName={styleName} enabled={enabled} onPress={onPress}>
			<Text>{text}</Text>
		</Button>
	);
};

BigButton.defaultProps = {
	activeOpacity: 0.5,
	enabled: true,
	styleName: null
};

BigButton.propTypes = {
	enabled: PropTypes.bool,
	styleName: PropTypes.string,
	onPress: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
};
export default BigButton;
