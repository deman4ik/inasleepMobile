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
import LinearGradient from 'react-native-linear-gradient';

export default class LoginPage extends Component {
  static navigationOptions = {
    header: {
       visible: false,
     },
  };
  render() {
    const { isLoggingIn, onSetNameOrEmail, onSetPassword, onLogin,  navToRegisterPage, navToRemindPassPage} = this.props;
    return (
      <LinearGradient colors={[colors.gradientColorOne,colors.gradientColorTwo]} style={{flex:1, justifyContent:'center'}} >
        <KeyboardAvoidingView behavior='padding' style={{flex:1, justifyContent:'center'}} >
          <StatusBar barStyle="light-content" />
          <Brand />
          <View style={{ justifyContent: 'flex-start'}} >
            <View style={{ justifyContent: 'flex-start', }}>
              <TextField placeholder='Username or Email' onChangeText={(text) => onSetNameOrEmail(text)}/>
              <TextField password={true} placeholder="Password" onChangeText={(text) => onSetPassword(text)} />
            </View>
            <FlatButton enabled={!isLoggingIn} onPress={navToRemindPassPage} textStyle={{color: colors.commonDetailColor}} title='Forgot password'/>
            <ProgressButton isProgress={isLoggingIn} btnProps={{onPress: onLogin, title:'Login', backgroundColor: colors.commonTextColor, textStyle: {color: colors.gradientColorOne}}}/>
            <FlatButton enabled={!isLoggingIn} onPress={navToRegisterPage} textStyle={{color: colors.commonTextColor}} title='No Account? Register!'/>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient >
    )
  }
}
