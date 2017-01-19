// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'

export default class RegisterPage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Register Screen
        </Text>
        <Button onPress={this.props.navToLoginPage} title='Already have Account? Login!'/>

      </View>
    )
  }
}
