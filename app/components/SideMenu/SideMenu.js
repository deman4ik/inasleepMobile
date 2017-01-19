// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'

export default class SideMenu extends Component {
  render() {
    const {navToFlowPage, navToProfilePage} = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>

<Button onPress={navToFlowPage} title='Flow' />
<Button onPress={navToProfilePage} title='Profile' />
      </View>
    )
  }
}
