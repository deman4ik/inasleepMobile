// @flow weak
import { NavigationActions } from "react-navigation";
import * as actionTypes from "../actionTypes";

/* TODO: Delete Login/Register Page from Navigation state
https://github.com/react-community/react-navigation/issues/395
https://github.com/react-community/react-navigation/issues/199
*/
export const navToMainPage = () => {
	return NavigationActions.reset({
		index: 0,
		key: null,
		actions: [
			NavigationActions.navigate({
				routeName: "Main"
			})
		]
	});
};

export const navToLoginPage = () => {
	return NavigationActions.back();
	/*  return {
          type: actionTypes.NAV_TO_LOGIN_PAGE
      }
      */
};

export const navToRegisterPage = () => {
	return NavigationActions.navigate({
		routeName: "Register"
	});
	/*return {
        type: actionTypes.NAV_TO_REGISTER_PAGE
    }*/
};

export const navToRemindPassPage = () => {
	return {
		type: actionTypes.NAV_TO_REMIND_PASS_PAGE
	};
};

export const navToFlowPage = () => {
	return {
		type: actionTypes.NAV_TO_FLOW_PAGE
	};
};

export const navToProfilePage = () => {
	return NavigationActions.navigate({
		routeName: "Profile"
	});
};

export const navToDreamPage = () => {
	return NavigationActions.navigate({
		routeName: "Dream"
	});
};
