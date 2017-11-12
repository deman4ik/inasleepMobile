// @flow
import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import { ViewContainer, Comment, Header, HeaderLeft, HeaderTitle, AddCommentInput } from "components";
import { translate } from "utils";
import { colors } from "styles";

const styles = StyleSheet.create({});

export default class CommentsPage extends Component {
    render() {
        const { comments, focus } = this.props.navigation.state.params;
        const { auth, navigation } = this.props;
        const { language } = auth;
        return (
            <ViewContainer barColor={"light"}>
                <Header>
                    <HeaderTitle text="Комментарии" />
                    <HeaderLeft icon="ios-arrow-back" onPress={() => navigation.goBack()} />
                </Header>

                <FlatList
                    data={comments}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => <Comment comment={item} onAuthorPress={() => null} />}
                />
                <AddCommentInput
                    avatar={"https://randomuser.me/api/portraits/women/10.jpg"}
                    placeholder={"Добавьте комментарий..."}
                    onSend={() => {
                        return null;
                    }}
                    dreamId={"1"}
                    focus={focus}
                />
            </ViewContainer>
        );
    }
}
