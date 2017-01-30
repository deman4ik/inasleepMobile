// @flow
import React, {Component} from 'react'
import {Actions, Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore'
import SplashScreen from './components/SplashScreen'
import Drawer from './components/Drawer'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import FlowPage from './components/FlowPage'
import ProfilePage from './components/ProfilePage'



const RouterWithRedux = connect()(Router)
const Store = configureStore()
const Scenes = Actions.create(
  <Scene key='root'>
  <Scene key='splashScreen' component={SplashScreen}  hideNavBar={true}  />
  <Scene key='loginPage' initial={true} component={LoginPage} title='Login Page' direction='vertical' hideNavBar={true} type="transitionToTop" />
  <Scene key='registerPage' component={RegisterPage} title='Register Page' direction='vertical' hideNavBar={true} type="transitionToTop" />
  <Scene key='drawer' component={Drawer} open={false} >
    <Scene key='main' tabs={false}   >
      <Scene key='flowPage' component={FlowPage} title='Flow Page' />
      <Scene key='profilePage' component={ProfilePage} title='Profile Page' />
    </Scene>
  </Scene>
  </Scene>
)
export default class App extends Component {
  render () {
    return (
      <Provider store={Store}>
        <RouterWithRedux scenes={Scenes}/>
      </Provider>
    )
  }
}
