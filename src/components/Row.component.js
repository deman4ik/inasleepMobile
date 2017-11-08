import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { normalize } from "utils";
import { textStyles, colors } from "styles";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    height: 65
  },
  icon: {
    color: "#222222",
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: 15
  },
  rightIcon: {
    color: "#222222",
    textAlign: "center",
    textAlignVertical: "center",
    opacity: 0.5
  },
  text: {
    color: "#666666",
    flex: 1
  }
});
export const IconTextRow = props => {
  const { icon, iconRight, text, onPress, disabled } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled}>
      {icon !== null && <Ionicons size={normalize(22)} name={icon} style={styles.icon} />}
      {text !== null && <Text style={[textStyles.text, styles.text]}>{text}</Text>}
      {iconRight !== null && <Ionicons size={normalize(20)} name={iconRight} style={styles.rightIcon} />}
    </TouchableOpacity>
  );
};

IconTextRow.defaultProps = {
  icon: null,
  iconRight: null,
  text: null,
  disabled: false,
  onPress: null
};

IconTextRow.propTypes = {
  icon: PropTypes.string,
  iconRight: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func
};
