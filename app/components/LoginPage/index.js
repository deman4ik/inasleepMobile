// @flow
// Container for Login Component
import LoginPage from './LoginPage'
import {connect} from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import { navToRegisterPage, navToRemindPassPage } from '../../navActions'
import {getLoginPage} from '../../reducers/rootReducer'

const mapStateToProps = (state) => ({
  ...getLoginPage(state),
})

export default connect(mapStateToProps, {...actions,navToRegisterPage,navToRemindPassPage})(LoginPage)
