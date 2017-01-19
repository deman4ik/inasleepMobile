// @flow weak
import * as actionTypes from './actionTypes'
import {
    Actions
} from 'react-native-router-flux'

export const navToLoginPage = () => {
    Actions.loginPage({
        type: 'replace'
    })
    return {
        type: actionTypes.NAV_TO_LOGIN_PAGE
    }
}

export const navToRegisterPage = () => {
    Actions.registerPage({
        type: 'replace'
    })
    return {
        type: actionTypes.NAV_TO_REGISTER_PAGE
    }
}

export const navToFlowPage = () => {
    Actions.flowPage({
        type: 'replace'
    })
    return {
        type: actionTypes.NAV_TO_FLOW_PAGE
    }
}

export const navToProfilePage = () => {
    Actions.profilePage({
        type: 'replace'
    })
    return {
        type: actionTypes.NAV_TO_PROFILE_PAGE
    }
}
