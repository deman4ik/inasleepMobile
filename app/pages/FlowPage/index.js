// @flow
// Container for FlowPage Component
import FlowPage from "./FlowPage";
import { connect } from "react-redux";
import * as actions from "./actions"; // mapDispatchToProps
import { navToDreamPage } from "../../navigation/navActions";
import { getFlowPage, getNav } from "../../reducers/rootReducer";

const mapStateToProps = state => ({
  ...getFlowPage(state),
  nav: {
    ...getNav(state)
  }
});

export default connect(mapStateToProps, {
  ...actions,
  navToDreamPage
})(FlowPage);
