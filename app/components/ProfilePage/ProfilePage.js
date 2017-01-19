// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
} from 'react-native'

export default class ProfilePage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5D5D7F'}}>
        <Text style={{fontSize: 40, color: 'white'}}>
          Profile Page
        </Text>
      </View>
    )
  }
}
