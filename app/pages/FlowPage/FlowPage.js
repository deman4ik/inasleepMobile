// @flow
import React, { Component } from "react";
import { FlatList, Text, View, Button } from "react-native";
import FlatButton from "../../components/FlatButton";
import FlowListItem from "../../components/FlowListItem";
import DreamListItem from "../../components/DreamListItem";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class FlowPage extends Component {
  render() {
    const { data, navToDreamPage } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
data={data}
keyExtractor={(item,index)=>item.id}
renderItem={({item}) => <FlowListItem data={item} />}
/>
      </View>
    );
  }
}
