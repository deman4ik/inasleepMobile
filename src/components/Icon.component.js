// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import {
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Foundation,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    SimpleLineIcons,
    Octicons,
    Zocial
} from "@expo/vector-icons";
//TODO: Оставить только используемые наборы

export const Icon = props => {
    const { set } = props;
    delete props.set;
    const switchSet = iconProps => {
        switch (set) {
            case "Entypo":
                return <Entypo {...iconProps} />;
                break;
            case "EvilIcons":
                return <EvilIcons {...iconProps} />;
                break;
            case "Feather":
                return <Feather {...iconProps} />;
                break;
            case "FontAwesome":
                return <FontAwesome {...iconProps} />;
                break;
            case "Foundation":
                return <Foundation {...iconProps} />;
                break;
            case "Ionicons":
                return <Ionicons {...iconProps} />;
                break;
            case "MaterialIcons":
                return <MaterialIcons {...iconProps} />;
                break;
            case "MaterialCommunityIcons":
                return <MaterialCommunityIcons {...iconProps} />;
                break;
            case "SimpleLineIcons":
                return <SimpleLineIcons {...iconProps} />;
                break;
            case "Octicons":
                return <Octicons {...iconProps} />;
                break;
            case "Zocial":
                return <Zocial {...iconProps} />;
                break;

            default:
                return null;
        }
    };
    return switchSet(props);
};
