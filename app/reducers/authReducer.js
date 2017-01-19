// @flow weak
import * as actionTypes from '../actionTypes'

// Reducer
const DEFAULT_STATE = {
  isAuthenticated: false,
  name: '',
  email: '',
  password: '',
      }
export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.AUTH_AUTHENTICATED:
      return {...state, isAuthenticated: true}
    default:
      return state
  }
}

// Selectors (mapStateToProps)
export const getAuthState = ({auth}) => ({
  auth
})
