// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  ActivityIndicator
} from 'react-native'

export default class LoginPage extends Component {
  render() {
    const { isLoggingIn, nameOrEmailError, passwordError, onSetNameOrEmail, onSetPassword, onLogin, navToRegisterPage} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Login Screen
        </Text>

        <TextInput
        style={{height: 40}}
         placeholder="Email or Username"
         onChangeText={(text) => onSetNameOrEmail(text)}
       />

       <Text style={{color: 'red'}}>
        {nameOrEmailError}
         </Text>

         <TextInput
         style={{height: 40}}
         placeholder="Password"
         onChangeText={(text) => onSetPassword(text)}
         />
         <Text style={{color: 'red'}}>
          {passwordError}
           </Text>

        <Button onPress={onLogin} title='Login' />
        <ActivityIndicator
        animating={isLoggingIn}
        size="large"
      />
        <Button onPress={navToRegisterPage} title='No Account? Register!'/>

      </View>
    )
  }
}
