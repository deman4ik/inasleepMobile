import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { textStyles, colors } from "styles";
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    padding: 15
  },
  text: {
    color: colors.greyDarkest
  }
});
export const ShowMoreContentRow = props => {
  const { text, count, onPress, disabled } = props;

  const getText = () => {
    if (count !== null) {
      return `${text} (${count})`;
    } else {
      return text;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled}>
      <Text style={[textStyles.text, styles.text]}>{getText()}</Text>
    </TouchableOpacity>
  );
};
ShowMoreContentRow.defaultProps = {
  count: null,
  disabled: false
};
ShowMoreContentRow.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
