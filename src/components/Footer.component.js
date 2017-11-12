// @flow
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Dimensions, View } from "react-native";
import { colors } from "styles";
import { normalize } from "utils";
const window = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        height: 55,
        width: window.width,
        backgroundColor: colors.white,
        flexGrow: 1,
        flexShrink: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    }
});

/* Нижняя панель - контейнер */
export const Footer = props => {
    const { children, style } = props;
    return <View style={[styles.container, style]}>{children}</View>;
};
