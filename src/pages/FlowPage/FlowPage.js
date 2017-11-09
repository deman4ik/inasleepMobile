// @flow
import React, { Component } from "react";
import { FlatList } from "react-native";
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
