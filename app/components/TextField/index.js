import React from 'react';
import {
 MKTextField
} from 'react-native-material-kit';
import colors from '../../styles/colors';

const MyMKTextField = MKTextField.textfieldWithFloatingLabel()
.withStyle({
  height: 48,  // have to do it on iOS
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
})
.withTintColor(colors.darkBackground)
.withTextInputStyle({flex: 1, color: colors.darkBackground})
/*.withFloatingLabelFont({
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '200',
  })*/
.build();


const TextField = (props) => {

      return (
        <MyMKTextField {...props}/>
      )

}
export default TextField;
