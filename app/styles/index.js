import { StyleSheet } from "react-native";
import colors from "./colors";

const appStyles = StyleSheet.create({
  errorLabel: {
    textAlign: "center",
    color: "red",
    marginHorizontal: 10,
    //marginTop: 10,
    //marginBottom: 10,
    //minHeight: 20,
    fontSize: 14
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
  },
  bigButton: {
    marginHorizontal: 10,
    marginVertical: 5,
    minHeight: 30
  },
  bigButtonText: {
    fontSize: 20
  }
});

export default appStyles;
