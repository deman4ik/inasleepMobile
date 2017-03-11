// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'
import FlatButton from '../FlatButton'

export default class FlowPage extends Component {
  render() {
      const { navToDreamPage } = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Flow Screen
        </Text>
  <FlatButton onPress={navToDreamPage} title='Go To Dream Page'/>
      </View>
    )
  }
}
