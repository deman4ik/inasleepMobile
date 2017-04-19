import React from "react";
import { View, Image, Text } from "react-native";
import {
  getTheme
} from 'react-native-material-kit';

const theme = getTheme();

const DreamListItem = props => {
  const { data } = props;
  return (
<View style={theme.cardStyle}>
  <Image source={require("../../../images/chasing_dreams.png")} style={theme.cardImageStyle} />
  <Text style={theme.cardTitleStyle}>Welcome</Text>
  <Text style={theme.cardContentStyle}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </Text>
  <View style={theme.cardMenuStyle}></View>
  <Text style={theme.cardActionStyle}>My Action</Text>
</View>
);
}

export default DreamListItem;
