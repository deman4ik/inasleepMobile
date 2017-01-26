// @flow
import React, {Component} from 'react'
import {
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native'
import {
  MKProgress
} from 'react-native-material-kit';
import Brand from '../Brand'
import TextField from '../TextField'
import RaisedButton from '../RaisedButton'
import FlatButton from '../FlatButton'
import ProgressButton from '../ProgressButton'
import colors from '../../styles/colors'
import appStyles from '../../styles'

export default class LoginPage extends Component {
  render() {
    const { isLoggingIn, onSetNameOrEmail, onSetPassword, onLogin, navToRegisterPage, navToRemindPassPage} = this.props;
    return (
      <KeyboardAvoidingView behavior='padding' style={{flex:1, justifyContent:'center'}} >
        <StatusBar barStyle="dark-content" />
        <Brand />
        <View style={{ justifyContent: 'flex-start'}} >
          <View style={{ justifyContent: 'flex-start'}}>
            <TextField placeholder='Username or Email' onChangeText={(text) => onSetNameOrEmail(text)}/>
            <TextField password={true} placeholder="Password" onChangeText={(text) => onSetPassword(text)} />
            <FlatButton enabled={!isLoggingIn} onPress={navToRemindPassPage} textStyle={{color: 'gray'}} title='Forgot password'/>
            <ProgressButton isProgress={isLoggingIn} btnProps={{onPress: onLogin, title:'Login', backgroundColor: colors.darkBackground, textStyle: {color: 'white'}}}/>
            <FlatButton enabled={!isLoggingIn} onPress={navToRegisterPage} textStyle={{color: colors.darkBackground}} title='No Account? Register!'/>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
