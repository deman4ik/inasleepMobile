// @flow
import React from "react";
import { TouchableHighlight, Text, Image, StyleSheet, Dimensions, View } from "react-native";
import { CardTextButton, CardAvatarButton, CardIconButton } from ".";
import { dimensionRelativeToIphone } from "utils";
import { textStyles, colors } from "../styles";
const window = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch"
  },
  overlay: {
    justifyContent: "space-between",
    width: window.width,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20
  },
  title: {
    color: colors.white,
    textAlign: "center"
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "flex-end"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    alignSelf: "center",
    paddingBottom: 5
  }
});
export const DreamHeader = props => {
  const { dream } = props;
  return (
    <TouchableHighlight
      underlayColor={colors.darkOverlay}
      style={styles.container}
      onPress={() => {
        null;
      }}
    >
      <View style={styles.overlay}>
        <Text style={[textStyles.title, styles.title]}>{dream.title}</Text>
        <View style={styles.detailContainer}>
          <CardAvatarButton
            src={dream.avatar}
            text={dream.author.toString()}
            onPress={() => {
              null;
            }}
          />

          <View style={styles.infoContainer}>
            <CardTextButton
              text={dream.date}
              onPress={() => {
                null;
              }}
            />
            <CardTextButton
              text={dream.location}
              onPress={() => {
                null;
              }}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <CardIconButton
            icon="ios-heart"
            text={dream.likesCount.toString()}
            onPress={() => {
              null;
            }}
          />

          <CardIconButton
            icon="ios-chatboxes"
            text={dream.commentsCount.toString()}
            onPress={() => {
              null;
            }}
          />

          <CardIconButton
            icon="ios-information-circle"
            text={dream.interpetsCount.toString()}
            onPress={() => {
              null;
            }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};
