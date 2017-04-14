// @flow
import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import FlatButton from "../../components/FlatButton";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class FlowPage extends Component {
  render() {
    const { navToDreamPage } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Icon size={24} color="white" name="home" /><Text>
          Flow Screen
        </Text>
        <FlatButton onPress={navToDreamPage} title="Go To Dream Page" />
      </View>
    );
  }
}
