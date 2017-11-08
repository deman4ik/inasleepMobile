import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { normalize } from "utils";
export const textStyles = StyleSheet.create({
  title: {
    fontFamily: "Rubik-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: normalize(20),
    lineHeight: normalize(25)
  },
  subtitle: {
    fontFamily: "Rubik-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#222222",
    fontSize: normalize(15),
    lineHeight: normalize(18)
  },
  text: {
    fontFamily: "Rubik-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: normalize(15)
    //lineHeight: 16,
    //letterSpacing: 0.5
  },
  caption: {
    fontFamily: "Rubik-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: normalize(12),
    lineHeight: normalize(16),
    letterSpacing: 0.5,
    color: colors.greyDarkest
  },
  dividerCaption: {
    backgroundColor: "transparent",
    marginTop: -1,
    marginBottom: 5,
    marginHorizontal: 15
  }
});
