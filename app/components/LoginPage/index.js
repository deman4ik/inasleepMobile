// @flow
// Container for Login Component
import LoginPage from './LoginPage'
import {connect} from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import { navToRegisterPage, navToRemindPassPage } from '../../navActions'
import {getNav, getLoginPage} from '../../reducers/rootReducer'

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getLoginPage(state),
})

export default connect(mapStateToProps, {...actions,navToRegisterPage,navToRemindPassPage})(LoginPage)
