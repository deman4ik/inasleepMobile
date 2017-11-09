// @flow
import React, { Component } from "react";
import { FlatList, StatusBar, Text, Button, Image, Platform, TextInput, TouchableHighlight } from "react-native";
import { View, Title, NavigationBar, Icon } from "@shoutem/ui";
import { Ionicons } from "@expo/vector-icons";
import { DreamCard, ViewContainer, Header, HeaderTitle } from "components";

export default class FlowPage extends Component {
    render() {
        const { data, navToDreamPage } = this.props;
        return (
            <ViewContainer barColor={"light"}>
                <Header>
                    <HeaderTitle text="Inasleep" />
                </Header>

                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => <DreamCard dream={item} onPress={navToDreamPage} />}
                />
            </ViewContainer>
        );
    }
}
