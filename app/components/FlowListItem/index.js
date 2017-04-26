import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, ListItem, Avatar } from "react-native-material-ui";
import appStyles from "../../styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../styles/colors";
import CardMediaOverlay from "../CardMediaOverlay";
import FitImage from "react-native-fit-image";

const styles = StyleSheet.create({
  fitImage: {
    borderRadius: 20
  },
  textContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  media: {
    height: 150,
    width: null,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "stretch"
    //position: 'absolute',
    // left: -16,
    // right: -16,
  },
  content: {
    backgroundColor: "red",
    //  position: 'absolute',
    //     left: -16,
    //   right: -16,
    bottom: 0
    // paddingTop: 24,
    // paddingBottom: 16,
    // paddingLeft: 16,
    // paddingRight: 16
  }
});
//   style={{ backgroundColor: "rgba(0,0,0,.35)" }}
const FlowListItem = props => {
  const { data } = props;
  return (
    <View>
      <Card>

        <Image style={styles.media} source={{ uri: data.image }}>

          <CardMediaOverlay
             style={{ backgroundColor: "transparent"  }}
             backgroundImageColor={data.imageColor}
            leftElement={
              <FitImage source={{ uri: data.avatar }} style={styles.fitImage} />
            }
            centerElement={{
              primaryText: data.author,
              secondaryText: "3 days ago"
            }}
            rightElement={<Icon size={18} color={"white"} name="more-vert" />}
          />

        </Image>
        <View style={styles.textContainer}>
          <Text>{data.text}</Text>
        </View>
        <ListItem
          rightElement={
            <View style={{ flex: 0, flexDirection: "row" }}>
              <Icon size={18} color={colors.darkBackground} name="favorite" />
              <Text style={{ width: 30 }}>{data.likesCount}</Text>
            </View>
          }
        />
      </Card>
    </View>
  );
};

export default FlowListItem;
