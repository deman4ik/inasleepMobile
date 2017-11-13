// @flow
import React from "react";
import PropTypes from "prop-types";
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
        marginVertical: 12,
        marginHorizontal: 50
    },
    leftContainer: {
        position: "absolute",
        bottom: 2,
        left: 15
    },
    rightContainer: {
        position: "absolute",
        bottom: 2,
        right: 15
    }
});

/* Левый элемент навигационной панели - кнопка */
export const HeaderLeft = props => {
    const { onPress, icon, style, iconColor } = props;
    return (
        <TouchableOpacity style={[styles.leftContainer, style]} onPress={onPress}>
            <Ionicons name={icon} size={normalize(30)} color={iconColor} underlayColor="transparent" />
        </TouchableOpacity>
    );
};

HeaderLeft.defaultProps = {
    onPress: null,
    icon: "ios-arrow-back",
    iconColor: colors.white,
    style: null
};

HeaderLeft.propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    style: PropTypes.object
};

/* Правый элемент навигационной панели - кнопка */
export const HeaderRight = props => {
    const { onPress, icon, style, iconColor } = props;
    return (
        <TouchableOpacity style={[styles.rightContainer, style]} onPress={onPress}>
            <Ionicons name={icon} size={normalize(30)} color={iconColor} underlayColor="transparent" />
        </TouchableOpacity>
    );
};
HeaderRight.defaultProps = {
    onPress: null,
    icon: "ios-arrow-back",
    iconColor: colors.white,
    style: null
};

HeaderRight.propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    style: PropTypes.object
};

/* Центральные элемент навигационной панели - текст */
export const HeaderTitle = props => {
    const { onPress, text, style } = props;
    return (
        <Text style={[styles.titleText, style]} onPress={onPress}>
            {text}
        </Text>
    );
};
HeaderTitle.defaultProps = {
    onPress: null,
    style: null
};

HeaderTitle.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired,
    style: PropTypes.object
};

/* Навигационная панель - контейнер */
export const Header = props => {
    const { children, style } = props;
    return <View style={[styles.container, style]}>{children}</View>;
};
Header.defaultProps = {
    style: null
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object
};
