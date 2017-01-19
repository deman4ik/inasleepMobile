// @flow weak
import * as actionTypes from '../actionTypes'

// Reducer
const DEFAULT_STATE = {
  name: '',
  nameValid: true,
  Email: '',
  EmailValid: true,
  password: '',
  passwordValid: true,
  canRegister: false
}
export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.AUTH_CHECK_NAME:
      return {...state, name: action.name, nameValid: action.valid, canRegister: action.canRegister }
      case actionTypes.AUTH_CHECK_EMAIL:
        return {...state, email: action.email, emailValid: action.valid, canRegister: action.canRegister }
    case actionTypes.AUTH_CHECK_PASS:
        return {...state, password: action.password, passwordValid: action.valid, canRegister: action.canRegister }
    default:
      return state
  }
}

// Selectors (mapStateToProps)
export const getRegisterPageState = ({registerPage}) => ({
  registerPage
})
