// @flow
import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { ViewContainer, Comment, Header, HeaderLeft, HeaderTitle, Footer } from "components";
import { translate } from "utils";
import { colors } from "styles";
const styles = StyleSheet.create({});

export default class CommentsPage extends Component {
    render() {
        const { comments } = this.props.navigation.state.params;
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

                <Footer>
                    <HeaderTitle text="Добавить комментарий" />
                </Footer>
            </ViewContainer>
        );
    }
}
