import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity, Image, Text } from "react-native";
import PropTypes from "prop-types";
import { dimensionRelativeToIphone } from "utils";
import { textStyles, colors } from "styles";
const window = Dimensions.get("window");
const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    paddingRight: 5
  },
  image: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,

    borderWidth: 0.5,
    borderRadius: dimensionRelativeToIphone(35, window.width) / 2,
    resizeMode: "cover",
    width: dimensionRelativeToIphone(35, window.width),
    height: dimensionRelativeToIphone(35, window.width)
  },
  text: {
    letterSpacing: 1,
    marginVertical: 12,
    marginRight: 10
  }
});

export const CardAvatarButton = props => {
  const { onPress, text, src, color } = props;
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={{
          uri: src
        }}
        style={[styles.image, { borderColor: color }]}
      />

      <Text style={[textStyles.caption, styles.text, { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

CardAvatarButton.defaultProps = {
  color: "white"
};

CardAvatarButton.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired
};
