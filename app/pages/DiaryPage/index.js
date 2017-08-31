// @flow
// Container for DiaryPage Component
import DiaryPage from "./DiaryPage";
import { connect } from "react-redux";
import * as actions from "./actions"; // mapDispatchToProps
import { getAuth } from "../../reducers/rootReducer";

const mapStateToProps = state => ({
	...getAuth(state)
});

export default connect(mapStateToProps, actions)(DiaryPage);
