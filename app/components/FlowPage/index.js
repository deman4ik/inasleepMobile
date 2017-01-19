// @flow
// Container for FlowPage Component
import FlowPage from './FlowPage'
import {connect} from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import {getNav} from '../../reducers/rootReducer'

const mapStateToProps = (state) => ({
  ...getNav(state),
})

export default connect(mapStateToProps, actions)(FlowPage)
