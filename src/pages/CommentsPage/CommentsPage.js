// @flow
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ViewContainer, Comment } from "components";
import { translate } from "utils";
import { colors } from "styles";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyLight,
    justifyContent: "flex-start"
  }
});

export default class CommentsPage extends Component {
  render() {
    const { dreamId } = this.props.navigation.state.params;
    const { auth, navigation } = this.props;
    const { language } = auth;
    return (
      <ViewContainer barColor={"light"}>
        <Text>Comments</Text>
      </ViewContainer>
    );
  }
}
