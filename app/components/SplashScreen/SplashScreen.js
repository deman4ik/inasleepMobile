// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
} from 'react-native'

export default class SplashScreen extends Component {
  componentDidMount() {
      const { isAuthenticated,navToLoginPage,navToMainPage } = this.props;
      if (isAuthenticated)
      {
        navToMainPage();
      }
      else {
        navToLoginPage();
      }
   }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5D5D7F'}}>
        <Text style={{fontSize: 40, color: 'white'}}>
          Inasleep
        </Text>
      </View>
    )
  }
}
