import React from "react";
import { MKTextField } from "react-native-material-kit";
import { View, TextInput } from "react-native";
import colors from "../../styles/colors";
import appStyles from "../../styles";

const MyMKTextField = MKTextField.textfieldWithFloatingLabel()
	.withStyle(appStyles.textField)
	.withTextInputStyle({ flex: 1, color: colors.commonTextColor })
	/*.withFloatingLabelFont({
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '200',
  })*/
	.build();

const TextField = props => {
	/*return (
    <MyMKTextField
      highlightColor={colors.commonTextColor}
      tintColor={colors.commonDetailColor}
      placeholderTextColor={colors.commonDetailColor}
      {...props}
    />
);*/
	return (
		<View
			style={{
				marginTop: 10,
				marginHorizontal: 10,
				borderBottomWidth: 0.5,
				borderBottomColor: colors.commonTextColor
			}}
		>
			<TextInput
				style={{
					height: 48,

					color: colors.commonTextColor
				}}
				{...props}
				placeholderTextColor={colors.commonTextColor}
			/>
		</View>
	);
};
export default TextField;
