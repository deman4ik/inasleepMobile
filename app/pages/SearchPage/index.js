// @flow
// Container for SearchPage Component
import SearchPage from "./SearchPage";
import { connect } from "react-redux";
import * as actions from "./actions"; // mapDispatchToProps
import { getAuth } from "../../reducers/rootReducer";

const mapStateToProps = state => ({
  ...getAuth(state)
});

export default connect(mapStateToProps, actions)(SearchPage);
