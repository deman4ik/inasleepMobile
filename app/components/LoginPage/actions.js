// @flow weak
import * as actionTypes from '../../actionTypes'
import {
    getLoginPage
} from '../../reducers/rootReducer'
import {
    Actions
} from 'react-native-router-flux'
import { checkNameOrEmail, checkPassword } from '../../helpers/checks'
// Action creators
export const onSetNameOrEmail = (nameOrEmail) => {
    return {
            type: actionTypes.AUTH_LOGIN_PAGE_SET_NAME_EMAIL,
            nameOrEmail,
        }
}

export const onSetPassword= (password) => {
    return {
            type: actionTypes.AUTH_LOGIN_PAGE_SET_PASS,
            password,
        }
}

export const doLoggingIn = () =>
{
  return {type: actionTypes.AUTH_LOGIN}
}

export const onLogin = () => {
    return (dispatch, getState) => {
      dispatch(doLoggingIn());
        const { nameOrEmail, password } = getLoginPage(getState());
        let nameOrEmailValid = checkNameOrEmail(nameOrEmail);
        let passwordValid = checkPassword(password);
        let nameOrEmailError = '';
        if (!nameOrEmailValid) {
            nameOrEmailError = 'Your username must be more then 4 symbols';
        }
        let passwordError = ''
        if (!passwordValid) {
            passwordError = 'Your password must be more then 6 symbols';
        }

        let canLogin = nameOrEmailValid && passwordValid;

        if (canLogin)
        {
          //TODO: Login API Call
          setTimeout(() =>{
            dispatch({type:actionTypes.AUTH_AUTHENTICATED})
          },1000)
          Actions.flowPage({type: 'replace'});
        }
        else{
        dispatch({
            type: actionTypes.AUTH_LOGIN_INVALID,
            nameOrEmailValid,
            passwordValid,
            nameOrEmailError,
            passwordError,
        })
      }

    }
}

/*
export const loginWithDelay = ()=>{
  return (dispatch, getState) => {
    setTimeout(() => {
      const {onLogging} = getLogin(getState())
      if(!onLogging) {
        dispatch(login())
      }
    }, 1000)
  }
}
*/
