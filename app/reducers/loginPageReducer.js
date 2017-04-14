// @flow weak
import * as actionTypes from "../actionTypes";

// Reducer
const DEFAULT_STATE = {
  nameOrEmail: "",
  nameOrEmailValid: null,
  password: "",
  passwordValid: null,
  error: "",
  isLoggingIn: false
};
export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_PAGE_SET_NAME_EMAIL:
      return {
        ...state,
        nameOrEmail: action.nameOrEmail
      };
    case actionTypes.AUTH_LOGIN_PAGE_SET_PASS:
      return {
        ...state,
        password: action.password
      };
    case actionTypes.AUTH_LOGIN:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case actionTypes.AUTH_AUTHENTICATED:
      return {
        ...state,
        nameOrEmailValid: true,
        passwordValid: true,
        isLoggingIn: false,
        error: ""
      };
    case actionTypes.AUTH_LOGIN_INVALID:
      return {
        ...state,
        nameOrEmailValid: action.nameOrEmailValid,
        passwordValid: action.passwordValid,
        isLoggingIn: false,
        error: action.error
      };
    default:
      return state;
  }
}

// Selectors (mapStateToProps)
export const getLoginPageState = state => state;
