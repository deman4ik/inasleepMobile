// @flow weak
import * as actionTypes from "../../actionTypes";
import { getLoginPage } from "../../reducers/rootReducer";
import { navToMainPage } from "../../navigation/navActions";
import { checkStringIsNotNull } from "../../helpers/checks";
import { Alert } from "react-native";
// Action creators
export const onSetNameOrEmail = nameOrEmail => {
  return {
    type: actionTypes.AUTH_LOGIN_PAGE_SET_NAME_EMAIL,
    nameOrEmail
  };
};

export const onSetPassword = password => {
  return {
    type: actionTypes.AUTH_LOGIN_PAGE_SET_PASS,
    password
  };
};

export const doLoggingIn = () => {
  return {
    type: actionTypes.AUTH_LOGIN
  };
};

export const onLogin = () => {
  return (dispatch, getState) => {
    dispatch(doLoggingIn());
    const {
      nameOrEmail,
      password
    } = getLoginPage(getState());
    let nameOrEmailValid = checkStringIsNotNull(nameOrEmail);
    let passwordValid = checkStringIsNotNull(password);

    let canLogin = nameOrEmailValid && passwordValid;

    if (canLogin) {
      //TODO: Login API Call
      setTimeout(
        () => {
          dispatch({
            type: actionTypes.AUTH_AUTHENTICATED
          });
          dispatch(navToMainPage());
        },
        500
      );
    } else {
      let error = "Username or Password not specified.";
      setTimeout(
        () => {
          dispatch({
            type: actionTypes.AUTH_LOGIN_INVALID,
            nameOrEmailValid,
            passwordValid,
            error
          });
          Alert.alert("Can't login", error);
        },
        1000
      );
    }
  };
};
