// @flow weak
import * as actionTypes from "../actionTypes";

const DEFAULT_STATE = {};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		default:
			return state;
	}
}

// Selectors (mapStateToProps)
export const getDreamPageState = state => state;
