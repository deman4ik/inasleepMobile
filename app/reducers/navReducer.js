// @flow weak
import { NavigationActions } from "react-navigation";
import AppNavigator from "../navigation/navigator";
import { NAV_TO_MAIN_PAGE } from "../actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    /*  case NAV_TO_REGISTER_PAGE:
      return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Register' }), state);
*/
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}

export const getNav = state => state;
