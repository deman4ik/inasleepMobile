import React from "react";
import { MKButton } from "react-native-material-kit";
import appStyles from "../../styles";

const RaisedButton = props => {
  const { title, textStyle, backgroundColor } = props;
  const MyRaisedButton = MKButton.button()
    .withStyle(appStyles.bigButton)
    .withText(title)
    .withBackgroundColor(backgroundColor)
    .withTextStyle(textStyle)
    .build();
  return <MyRaisedButton {...props} />;
};

export default RaisedButton;
