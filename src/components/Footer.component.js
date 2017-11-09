// @flow
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Dimensions, View } from "react-native";
import { colors } from "styles";
import { normalize } from "utils";
const window = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        height: 40,
        width: window.width,
        position: "absolute",
        backgroundColor: colors.greyLight,
        alignItems: "center",
        justifyContent: "flex-end",
        bottom: 0
    }
});

/* Нижняя панель - контейнер */
export const Footer = props => {
    const { children, style } = props;
    return <View style={[styles.container, style]}>{children}</View>;
};
