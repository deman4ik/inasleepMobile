// @flow
import React, { Component } from "react";
import { FlatList, Text, View, Button } from "react-native";
import FlatButton from "../../components/FlatButton";
import FlowListItem from "../../components/FlowListItem";
import DreamListItem from "../../components/DreamListItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../styles/colors";

export default class FlowPage extends Component {
  static navigationOptions = {
    headerLeft: <Icon size={26} color={'white'} style={{paddingHorizontal: 10}} name="access-alarms" />,
    title: 'Inasleep',
    headerTintColor: 'white',
    headerRight: <Icon size={26} color={'white'} style={{paddingHorizontal: 10}} name="add-circle-outline" />,
    headerStyle: {backgroundColor: colors.blueGray}
  };
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
