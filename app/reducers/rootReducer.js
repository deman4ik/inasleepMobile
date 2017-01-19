// @flow weak
// This is the root reducer and root selectors
import {combineReducers} from 'redux'
import nav, * as fromNav from './navReducer'
import auth, * as fromAuth from './authReducer'
import loginPage, * as fromLoginPage from './loginPageReducer'
import registerPage, * as fromRegisterPage from './registerPageReducer'


export default combineReducers({
  nav,
  auth,
  loginPage,
  registerPage
})

export const getNav = (state) =>
  fromNav.getNav(state.nav)

export const getAuth = (state) =>
  fromAuth.getAuthState(state.auth)

export const getLoginPage = (state) =>
  fromLoginPage.getLoginPageState(state.loginPage)

export const getRegisterPage = (state) =>
  fromRegisterPage.getRegisterPageState(state.registerPage)
