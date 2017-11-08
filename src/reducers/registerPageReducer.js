// @flow weak
import * as actionTypes from "constants/actionTypes";

// Reducer
const DEFAULT_STATE = {
  email: "",
  emailValid: null,
  name: "",
  nameValid: null,
  password: "",
  passwordValid: null,
  error: "",
  isLoading: false
};
export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.AUTH_REG_PAGE_SET_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case actionTypes.AUTH_REG_PAGE_SET_NAME:
      return {
        ...state,
        name: action.name
      };
    case actionTypes.AUTH_REG_PAGE_SET_PASS:
      return {
        ...state,
        password: action.password
      };
    case actionTypes.AUTH_REGISTER:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case actionTypes.AUTH_REGISTERED:
      return {
        ...state,
        emailValid: true,
        nameValid: true,
        passwordValid: true,
        isLoading: false,
        error: ""
      };
    case actionTypes.AUTH_REG_INVALID:
      return {
        ...state,
        emailValid: action.emailValid,
        nameValid: action.nameValid,
        passwordValid: action.passwordValid,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}

// Selectors (mapStateToProps)
export const getRegisterPageState = state => state;
