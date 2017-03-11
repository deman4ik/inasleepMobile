// @flow
// Container for Register Component
import RegisterPage from './RegisterPage'
import {connect} from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import { navToLoginPage} from '../../navigation/navActions'
import {getRegisterPage} from '../../reducers/rootReducer'

const mapStateToProps = (state) => ({
  ...getRegisterPage(state),
})

export default connect(mapStateToProps, {...actions,navToLoginPage})(RegisterPage)
