// @flow
import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "styles";
import { normalize } from "utils";
import { HEADER_HEIGHT } from "constants";
const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    backgroundColor: colors.primaryDark,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  titleText: {
    color: colors.white,
    fontFamily: "Rubik-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: normalize(16),
    marginVertical: 10,
    marginHorizontal: 50
  },
  leftContainer: {
    position: "absolute",
    bottom: 0,
    left: 10
  },
  rightContainer: {
    position: "absolute",
    bottom: 0,
    right: 10
  }
});
export const HeaderLeft = props => {
  const { onPress, icon } = props;
  return (
    <TouchableOpacity style={styles.leftContainer} onPress={onPress}>
      <Ionicons name={icon} size={normalize(30)} color={colors.white} underlayColor="transparent" />
    </TouchableOpacity>
  );
};
export const HeaderRight = props => {
  const { onPress, icon } = props;
  return (
    <TouchableOpacity style={styles.rightContainer} onPress={onPress}>
      <Ionicons name={icon} size={normalize(30)} color={colors.white} underlayColor="transparent" />
    </TouchableOpacity>
  );
};

export const HeaderTitle = props => {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{text}</Text>
    </View>
  );
};
