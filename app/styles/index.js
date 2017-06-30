import { StyleSheet } from "react-native";
import colors from "./colors";

const appStyles = StyleSheet.create({
	authTextInputCont: {
		borderBottomWidth: 1,
		borderBottomColor: colors.authText,
		marginHorizontal: 10,
		marginTop: 10
	},
	authTextInput: {
		color: colors.authText,
		minHeight: 35
	},
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
	},
	titleLabel: {
		textAlign: "center",
		fontSize: 35,
		color: colors.commonTextColor,
		marginHorizontal: 10,
		marginTop: 10,
		backgroundColor: "transparent"
	},
	textField: {
		height: 48, // have to do it on iOS
		marginTop: 10,
		marginHorizontal: 10
	}
});

export default appStyles;
