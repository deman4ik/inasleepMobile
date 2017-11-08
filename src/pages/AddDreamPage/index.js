// @flow
// Container for AddDreamPage Component
import AddDreamPage from "./AddDreamPage";
import { connect } from "react-redux";
import * as actions from "./actions"; // mapDispatchToProps
import { getAuth } from "reducers/rootReducer";

const mapStateToProps = state => ({
  ...getAuth(state)
});

export default connect(mapStateToProps, actions)(AddDreamPage);
