// @flow
import React, { Component } from "react";
import { StyleSheet, Button } from "react-native";
import {
  ParallaxScroll,
  ViewContainer,
  DreamHeader,
  ReadMore,
  Divider,
  IconTextRow,
  Comment,
  ShowMoreContentRow
} from "../../components";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { translate } from "../../utils";
import { colors } from "../../config";
import { textStyles } from "../../styles";
import { Row, Icon, Text, Image, View, Subtitle, Caption, TextInput } from "@shoutem/ui";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyLight,
    justifyContent: "flex-start"
  },
  textContainer: {
    backgroundColor: colors.white
  },
  detailContainer: {
    backgroundColor: colors.white
  },
  rowIcon: {
    color: "#222222",
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: 15
  }
});
export default class DreamPage extends Component {
  render() {
    const { dream } = this.props.navigation.state.params;
    const { auth, navigation } = this.props;
    const { language } = auth;
    return (
      <ViewContainer barColor={"light"}>
        <ParallaxScroll
          renderContent={() => <DreamHeader dream={dream} />}
          backgroundImage={dream.image}
          stickyTitle={dream.title}
          navigateBack
          navigation={navigation}
          showMenu
        >
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <ReadMore numberOfLines={5} showHide={false}>
                {dream.text}
              </ReadMore>
            </View>
            <Divider textLeft="ДЕТАЛИ" />

            <View style={styles.detailContainer}>
              <Row styleName="small">
                <MaterialCommunityIcons size={22} name="puzzle" style={styles.rowIcon} />
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      paddingVertical: 5,
                      marginRight: 10,
                      backgroundColor: "#F2F2F2",
                      color: "black",
                      paddingHorizontal: 5
                    }}
                  >
                    Лошадь
                  </Text>
                  <Text
                    style={{
                      paddingVertical: 5,
                      marginRight: 10,
                      backgroundColor: "#F2F2F2",
                      color: "black",
                      paddingHorizontal: 5
                    }}
                  >
                    Дерево
                  </Text>
                  <Text
                    style={{
                      paddingVertical: 5,
                      marginRight: 10,
                      backgroundColor: "#F2F2F2",
                      color: "black",
                      paddingHorizontal: 5
                    }}
                  >
                    Летать
                  </Text>
                </View>
                <Icon styleName="disclosure" name="right-arrow" />
              </Row>

              <IconTextRow
                icon="ios-information-circle"
                text={`${dream.interpetsCount} интерпретации`}
                iconRight="ios-arrow-forward-outline"
                onPress={() => {
                  return null;
                }}
              />

              <IconTextRow icon="ios-person-add-outline" text="Никто не приснился" disabled />

              <IconTextRow icon="ios-people" text="Виден всем" disabled />

              <IconTextRow icon="ios-globe-outline" text={dream.location} disabled />
            </View>

            <Divider textLeft="КОММЕНТАРИИ" />
            <View style={styles.detailContainer}>
              <Comment
                avatar="https://shoutem.github.io/img/ui-toolkit/examples/image-11.png"
                author="Dustin"
                date="20 минут назад"
                text={
                  "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
                }
                onAuthorPress={() => {
                  return null;
                }}
              />
              <Comment
                avatar="https://shoutem.github.io/img/ui-toolkit/examples/image-12.png"
                author="Malone"
                date="30 минут назад"
                text={
                  "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
                }
                onAuthorPress={() => {
                  return null;
                }}
              />
              <Comment
                avatar="https://shoutem.github.io/img/ui-toolkit/examples/image-12.png"
                author="Malone"
                date="30 минут назад"
                text={"Тоже самое снилось, к чему бы это?"}
                onAuthorPress={() => {
                  return null;
                }}
              />

              <ShowMoreContentRow
                text="Посмотреть все комментарии"
                count={7}
                onPress={() => {
                  return null;
                }}
              />
              <IconTextRow
                size={22}
                icon="ios-chatboxes"
                text="Добавить комментарий"
                onPress={() => {
                  return null;
                }}
              />
            </View>
          </View>
        </ParallaxScroll>
      </ViewContainer>
    );
  }
}
