// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
} from 'react-native'

export default class DreamPage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
        <Text style={{fontSize: 40, color: 'white'}}>
          Dream Page
        </Text>
      </View>
    )
  }
}
