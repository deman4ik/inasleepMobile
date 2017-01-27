import React from 'react';
import {
 MKTextField
} from 'react-native-material-kit';
import colors from '../../styles/colors';
import appStyles from '../../styles'

const MyMKTextField = MKTextField.textfieldWithFloatingLabel()
.withStyle(appStyles.textField)
.withTextInputStyle({flex: 1, color: colors.commonTextColor})
/*.withFloatingLabelFont({
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '200',
  })*/
.build();


const TextField = (props) => {

      return (
        <MyMKTextField highlightColor={colors.commonTextColor} tintColor={colors.commonDetailColor} placeholderTextColor={colors.commonDetailColor} {...props}/>
      )

}
export default TextField;
