// @flow
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  ParallaxScroll,
  ViewContainer,
  DreamHeader,
  ReadMore,
  Divider,
  LineDivider,
  IconTextRow,
  TagsRow,
  Comment,
  CommentsBlock,
  ShowMoreContentRow
} from "components";
import { translate } from "utils";
import { colors } from "styles";
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
  }
});
export default class DreamPage extends Component {
  render() {
    const { dream } = this.props.navigation.state.params;
    const { auth, navigation, navToCommentsPage } = this.props;
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
              <TagsRow
                icon="puzzle"
                tags={["Лошадь", "Дерево", "Летать", "Кровать", "Облака"]}
                noTagsText="Нет ключевых слов"
              />
              <LineDivider />
              <IconTextRow
                icon="ios-information-circle"
                text={`${dream.interpetsCount} интерпретации`}
                iconRight="ios-arrow-forward-outline"
                onPress={() => {
                  return null;
                }}
              />
              <LineDivider />
              <TagsRow icon="account-star" tags={[]} noTagsText="Никто не приснился" />
              <LineDivider />
              <IconTextRow icon="ios-people" text="Виден всем" disabled />
              <LineDivider />
              <IconTextRow icon="ios-globe-outline" text={dream.location} disabled />
            </View>

            <Divider textLeft="КОММЕНТАРИИ" />
            <CommentsBlock
              comments={dream.comments}
              quantity={2}
              onShowMoreContent={navToCommentsPage}
              onAuthorPress={() => null}
              onAddComment={navToCommentsPage}
            />
          </View>
        </ParallaxScroll>
      </ViewContainer>
    );
  }
}
