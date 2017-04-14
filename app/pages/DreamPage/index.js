// @flow
// Container for DreamPage Component
import DreamPage from "./DreamPage";
import { connect } from "react-redux";
import * as actions from "./actions"; // mapDispatchToProps
import { getAuth } from "../../reducers/rootReducer";

const mapStateToProps = state => ({
  ...getAuth(state)
});

export default connect(mapStateToProps, actions)(DreamPage);
