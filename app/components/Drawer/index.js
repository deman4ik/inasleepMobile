// @flow
// Container for Drawer Component
import Drawer from './Drawer'
import {connect} from 'react-redux'
import * as actions from './actions' // mapDispatchToProps
import {getAuth} from '../../reducers/rootReducer'

const mapStateToProps = (state) => ({
  ...getAuth(state)
})

export default connect(mapStateToProps, actions)(Drawer)
