// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import FlatButton from "../../components/FlatButton";

export default class ProfilePage extends Component {
  render() {
    const { navToDreamPage } = this.props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#5D5D7F"
        }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>
          Profile Page
        </Text>
        <FlatButton onPress={navToDreamPage} title="Go To Dream Page" />
      </View>
    );
  }
}
