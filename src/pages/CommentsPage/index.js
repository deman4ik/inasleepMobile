// @flow
// Container for DreamPage Component
import CommentsPage from "./CommentsPage";
import { connect } from "react-redux";
import * as actions from "./actions"; // mapDispatchToProps
import { getAuth } from "reducers/rootReducer";

const mapStateToProps = state => ({
  auth: { ...getAuth(state) }
});

export default connect(mapStateToProps, actions)(CommentsPage);
