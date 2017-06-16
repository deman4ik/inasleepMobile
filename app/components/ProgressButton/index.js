import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { MKProgress } from "react-native-material-kit";
import RaisedButton from "../RaisedButton";
import FlatButton from "../FlatButton";
import colors from "../../styles/colors";

export default class ProgressButton extends Component {
	static propTypes = {
		// Show progress or button
		isProgress: PropTypes.bool,

		// Buttom type enum [flat, raised]
		buttonType: PropTypes.string
	};

	static defaultProps = {
		isProgress: false,
		buttonType: "raised"
	};
	render() {
		const { isProgress, buttonType, btnProps } = this.props;
		let element = null;
		if (isProgress) {
			element = (
				<MKProgress.Indeterminate
					style={{
						marginLeft: 10,
						marginRight: 10,
						backgroundColor: colors.commonDetailColor
					}}
					progressColor={colors.commonTextColor}
				/>
			);
		} else {
			switch (buttonType) {
				case "raised":
					element = <RaisedButton {...btnProps} />;
					break;
				case "flat":
					element = <FlatButton {...btnProps} />;
					break;
			}
		}
		console.log(element);
		return (
			<View style={{ height: 50, marginVertical: 5, justifyContent: "center" }}>
				{element}
			</View>
		);
	}
}
