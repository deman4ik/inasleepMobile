// @flow
// Container for NotificationsPage Component
import NotificationsPage from "./NotificationsPage";
import { connect } from "react-redux";
import * as actions from "./actions"; // mapDispatchToProps
import { getAuth } from "reducers/rootReducer";

const mapStateToProps = state => ({
  ...getAuth(state)
});

export default connect(mapStateToProps, actions)(NotificationsPage);
