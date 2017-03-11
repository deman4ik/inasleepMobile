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
import Brand from '../../components/Brand'
import TextField from '../../components/TextField'
import RaisedButton from '../../components/RaisedButton'
import FlatButton from '../../components/FlatButton'
import ProgressButton from '../../components/ProgressButton'
import colors from '../../styles/colors'
import appStyles from '../../styles'
import LinearGradient from 'react-native-linear-gradient';

export default class RegisterPage extends Component {
  render() {
    const { isLoading, onSetEmail, onSetName, onSetPassword, onRegister,  navToLoginPage} = this.props;
    return (
      <LinearGradient colors={[colors.gradientColorOne,colors.gradientColorTwo]} style={{flex:1, justifyContent:'center'}} >
        <KeyboardAvoidingView behavior='padding' style={{flex:1, justifyContent:'center'}} >
          <StatusBar barStyle="light-content" />
          <Brand />
          <View style={{ justifyContent: 'flex-start'}} >
            <View style={{ justifyContent: 'flex-start', }}>
              <TextField placeholder='Email' onChangeText={(text) => onSetEmail(text)}/>
              <TextField placeholder='Username' onChangeText={(text) => onSetName(text)}/>
              <TextField password={true} placeholder="Password" onChangeText={(text) => onSetPassword(text)} />
            </View>

            <ProgressButton isProgress={isLoading} btnProps={{onPress: onRegister, title:'Create Account', backgroundColor: colors.commonTextColor, textStyle: {color: colors.gradientColorOne}}}/>
            <FlatButton enabled={!isLoading} onPress={navToLoginPage} textStyle={{color: colors.commonTextColor}} title='Already has Account? Log in!'/>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient >
    )
  }
}
