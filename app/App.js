// @flow
import React, { Component } from "react";
import {
  NavigationActions,
  addNavigationHelpers,
  StackNavigator
} from "react-navigation";
import { Provider, connect } from "react-redux";
import configureStore from "./store/configureStore";

import AppNavigator from "./navigation/navigator";
import { COLOR, ThemeProvider } from "react-native-material-ui";


const uiTheme = {};
const AppWithNavigationState = connect(state => ({
  nav: state.nav
}))(({
  dispatch,
  nav
}) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

const Store = configureStore();

export default class App extends Component {
  render() {
    return (

      <Provider store={Store}>
          <ThemeProvider uiTheme={uiTheme}>
        <AppWithNavigationState />
        </ThemeProvider>
      </Provider>

    );
  }
}
