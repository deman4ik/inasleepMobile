// @flow weak
import * as actionTypes from '../actionTypes'

// Reducer
const DEFAULT_STATE = {
    nameOrEmail: '',
    nameOrEmailValid: null,
    nameOrEmailError: '',
    password: '',
    passwordValid: null,
    passwordError: '',
    isLoggingIn: false
}
export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN_PAGE_SET_NAME_EMAIL:
            return { ...state,
                nameOrEmail: action.nameOrEmail,
            }
        case actionTypes.AUTH_LOGIN_PAGE_SET_PASS:
            return { ...state,
                password: action.password,
            }
        case actionTypes.AUTH_LOGIN:
            return { ...state,
                isLoggingIn: action.isLoggingIn
            }
        case actionTypes.AUTH_AUTHENTICATED:
            return { ...state,
                nameOrEmailValid: true,
                nameOrEmailError: '',
                passwordValid: true,
                passwordError: '',
                isLoggingIn: false
            }
        case actionTypes.AUTH_LOGIN_INVALID:
            return { ...state,
                nameOrEmailValid: action.nameOrEmailValid,
                nameOrEmailError: action.nameOrEmailError,
                passwordValid: action.passwordValid,
                passwordError: action.passwordError,
                isLoggingIn: false
            }
        default:
            return state
    }
}

// Selectors (mapStateToProps)
export const getLoginPageState = (state) => (state)
