// @flow weak
import * as actionTypes from "../../actionTypes";
import { getRegisterPage } from "../../reducers/rootReducer";
import { navToMainPage } from "../../navigation/navActions";
import { checkEmail, checkName, checkPassword } from "../../utils";
import { Alert } from "react-native";

export const onSetEmail = email => {
	return {
		type: actionTypes.AUTH_REG_PAGE_SET_EMAIL,
		email
	};
};

export const onSetName = name => {
	return {
		type: actionTypes.AUTH_REG_PAGE_SET_NAME,
		name
	};
};

export const onSetPassword = password => {
	return {
		type: actionTypes.AUTH_REG_PAGE_SET_PASS,
		password
	};
};

export const doRegister = () => {
	return {
		type: actionTypes.AUTH_REGISTER
	};
};

export const onRegister = () => {
	return (dispatch, getState) => {
		dispatch(doRegister());
		const { email, name, password } = getRegisterPage(getState());
		let emailValid = checkEmail(email);
		let nameValid = checkName(name);
		let passwordValid = checkPassword(password);
		console.log(emailValid);
		console.log(nameValid);
		console.log(passwordValid);
		let canReg = emailValid && nameValid && passwordValid;

		if (canReg) {
			//TODO: Register API Call
			setTimeout(() => {
				dispatch({
					type: actionTypes.AUTH_REGISTERED
				});
				dispatch(navToMainPage);
			}, 1000);
		} else {
			let error = "";
			if (!emailValid) {
				error = error + "Email is not valid.\n";
			}
			if (!nameValid) {
				error = error + "Username must be more then 3 symbols.\n";
			}
			if (!passwordValid) {
				error = error + "Password must be more then 5 symbols.\n";
			}
			setTimeout(() => {
				dispatch({
					type: actionTypes.AUTH_REG_INVALID,
					emailValid,
					nameValid,
					passwordValid,
					error
				});
				Alert.alert("Can't create new account", error);
			}, 2000);
		}
	};
};
