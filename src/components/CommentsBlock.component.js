import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { StyleSheet, Dimensions, View } from "react-native";
import { ShowMoreContentRow, IconTextRow, Comment, LineDivider } from ".";
import { colors } from "styles";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  }
});
export const CommentsBlock = props => {
  const { comments, quantity, onAuthorPress, onShowMoreContent, onAddComment } = props;
  const count = comments.length;
  let currentComments;
  let currentCount = quantity;
  let moreCount = 0;

  if (quantity === null || quantity > count) {
    currentComments = comments;
    currentCount = count;
  } else {
    currentComments = _.take(comments, currentCount);
    moreCount = count - currentCount;
  }

  const commentsList = currentComments.map(comment => (
    <View key={comment.id}>
      <Comment comment={comment} onAuthorPress={onAuthorPress} />
      <LineDivider />
    </View>
  ));

  return (
    <View style={styles.container}>
      {currentCount > 0 ? commentsList : <IconTextRow text="Нет комментариев" disabled />}

      {moreCount > 0 && (
        <ShowMoreContentRow
          text="Посмотреть все комментарии"
          count={moreCount}
          onPress={() => {
            onShowMoreContent(comments);
          }}
        />
      )}

      <IconTextRow
        size={22}
        icon="ios-chatboxes"
        text="Добавить комментарий"
        onPress={() => {
          onAddComment(comments);
        }}
      />
    </View>
  );
};

CommentsBlock.defaultProps = {
  comments: null,
  quantity: null,
  onAuthorPress: null,
  onShowMoreContent: null,
  onAddComment: null
};

CommentsBlock.propTypes = {
  comments: PropTypes.array,
  quantity: PropTypes.number,
  onAuthorPress: PropTypes.func,
  onShowMoreContent: PropTypes.func,
  onAddComment: PropTypes.func
};
