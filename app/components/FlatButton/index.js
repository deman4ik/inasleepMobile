import React from "react";
import { Text } from "react-native";
import { MKButton } from "react-native-material-kit";
import appStyles from "../../styles";

const FlatButton = props => {
  const { title, textStyle } = props;
  const MyFlatButton = MKButton.flatButton()
    .withStyle(appStyles.bigButton)
    .withText(title)
    .withTextStyle(textStyle)
    .build();
  return <MyFlatButton {...props} />;
};

export default FlatButton;
