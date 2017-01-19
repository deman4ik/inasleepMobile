// @flow
// Container for SplashScreen Component
import SplashScreen from './SplashScreen'
import {connect} from 'react-redux'
//import * as actions from './actions' // mapDispatchToProps
import { navToLoginPage, navToFlowPage } from '../../navActions'
import {getAuth} from '../../reducers/rootReducer'

const mapStateToProps = (state) => ({
  ...getAuth(state)
})

export default connect(mapStateToProps, {navToLoginPage, navToFlowPage})(SplashScreen)
