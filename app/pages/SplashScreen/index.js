// @flow
// Container for SplashScreen Component
import SplashScreen from './SplashScreen'
import {connect} from 'react-redux'
import { navToLoginPage, navToMainPage } from '../../navigation/navActions'
import {getAuth} from '../../reducers/rootReducer'

const mapStateToProps = (state) => ({
  ...getAuth(state)
})

export default connect(mapStateToProps, {navToLoginPage, navToMainPage})(SplashScreen)
