import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { textStyles } from "styles";
const styles = StyleSheet.create({
  divider: {
    alignSelf: "stretch",
    paddingTop: 23,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F2F2F2",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: "#e5e5e5"
  },
  lineDivider: {
    borderBottomWidth: 0.5,
    borderColor: "#e5e5e5",
    alignSelf: "stretch",
    paddingTop: 0,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export const Divider = props => {
  const { textLeft, textRight, textCenter } = props;
  return (
    <View style={styles.divider}>
      {textLeft !== null && <Text style={[textStyles.caption, textStyles.dividerCaption]}>{textLeft}</Text>}
      {textCenter !== null && (
        <Text style={[textStyles.caption, textStyles.dividerCaption, { alignSelf: "center" }]}>{textCenter}</Text>
      )}
      {textRight !== null && <Text style={[textStyles.caption, textStyles.dividerCaption]}>{textRight}</Text>}
    </View>
  );
};

export const LineDivider = props => {
  return <View style={styles.lineDivider} />;
};
