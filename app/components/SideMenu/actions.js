import * as actionTypes from '../../actionTypes'
import {
    Actions
} from 'react-native-router-flux'

export const navToFlowPage = () => {
    Actions.flowPage();
    return {
        type: actionTypes.NAV_TO_FLOW_PAGE
    }
}

export const navToProfilePage = () => {
    Actions.profilePage();
    return {
        type: actionTypes.NAV_TO_PROFILE_PAGE
    }
}
