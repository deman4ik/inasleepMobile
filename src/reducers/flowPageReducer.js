// @flow weak
import * as actionTypes from "constants/actionTypes";
import * as selectorTypes from "constants/selectorTypes";
import _ from "lodash";

const DEFAULT_STATE = {
  feedFilter: selectorTypes.FEED_COMMUNITY,
  isLoading: false
};
export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Selectors (mapStateToProps)
export const getFlowPageState = state => state;
