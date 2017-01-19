// @flow
// Container for SideMenu Component
import SideMenu from './SideMenu'
import {connect} from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import {getNav} from '../../reducers/rootReducer'

const mapStateToProps = (state) => ({
  ...getNav(state),
})

export default connect(mapStateToProps, actions)(SideMenu)
