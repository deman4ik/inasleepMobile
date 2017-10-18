// @flow
import React from "react";
import { StyleSheet, Dimensions, TouchableHighlight, View, Image, Text, TouchableOpacity } from "react-native";
import { CardTextButton, CardAvatarButton, CardIconButton } from ".";
import { Ionicons } from "@expo/vector-icons";
import { dimensionRelativeToIphone, colors, normalize } from "../config";
import { textStyles } from "../styles";
const window = Dimensions.get("window");
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderColor: "transparent",
    borderRadius: 15,
    width: window.width - 20,
    marginHorizontal: 10,
    marginTop: 3,
    marginBottom: 27
  },
  image: {
    flex: 1,
    borderColor: "transparent",
    borderRadius: 15,
    height: normalize(280),
    width: window.width - 20
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.darkOverlay,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20
  },
  title: {
    color: "white",
    marginBottom: 15,
    textAlign: "center"
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15
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
  },
  actionButtonContainer: {
    position: "absolute",
    top: 15,
    right: 15
  }
});
export const DreamCard = props => {
  const { dream, onPress } = props;
  return (
    <TouchableHighlight style={styles.card} onPress={() => onPress(dream)}>
      <Image
        source={{
          uri: dream.image
        }}
        style={styles.image}
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
        <View style={styles.actionButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              null;
            }}
          >
            <Ionicons name="ios-more" size={normalize(24)} color="white" style={{ backgroundColor: "transparent" }} />
          </TouchableOpacity>
        </View>
      </Image>
    </TouchableHighlight>
  );
};
