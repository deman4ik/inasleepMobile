import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../config";
export const textStyles = StyleSheet.create({
	title: {
		fontFamily: "Rubik-Regular",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 20,
		lineHeight: 25
	},
	text: {
		fontFamily: "Rubik-Regular",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15
		//lineHeight: 16,
		//letterSpacing: 0.5
	},
	caption: {
		fontFamily: "Rubik-Regular",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 12,
		lineHeight: 16,
		letterSpacing: 0.5,
		color: colors.greyDarkest
	},
	dividerCaption: {
		backgroundColor: "transparent",
		marginTop: -1,
		marginBottom: 5,
		marginHorizontal: 15
	}
});
