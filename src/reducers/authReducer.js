// @flow weak
import * as actionTypes from "../actionTypes";
import { getLanguage } from "../locale";

// Reducer
const DEFAULT_STATE = {
	isAuthenticated: false,
	name: "",
	email: "",
	password: "",
	language: getLanguage()
};
export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case actionTypes.AUTH_AUTHENTICATED:
			return { ...state, isAuthenticated: true };
		default:
			return state;
	}
}

// Selectors (mapStateToProps)
export const getAuthState = ({ auth }) => ({
	auth
});
