// @flow
import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { translate } from "utils";

export default class MyProfilePage extends Component {
  render() {
    const { navToDreamPage, auth } = this.props;
    const { language } = auth;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#5D5D7F"
        }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>{translate("user.profile.userActions", language)}</Text>
        <Button onPress={navToDreamPage} title="Go To Dream Page" />
      </View>
    );
  }
}
