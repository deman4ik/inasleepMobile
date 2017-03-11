// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
} from 'react-native'

export default class SettingsPage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
        <Text style={{fontSize: 40, color: 'white'}}>
          Settings Page
        </Text>
      </View>
    )
  }
}
