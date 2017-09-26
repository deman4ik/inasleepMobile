// @flow
// Container for DreamPage Component
import DreamPage from "./DreamPage";
import { connect } from "react-redux";
import * as actions from "./actions"; // mapDispatchToProps
import { getNav } from "../../reducers/rootReducer";

const mapStateToProps = state => ({
	nav: {
		...getNav(state)
	}
});

export default connect(mapStateToProps, actions)(DreamPage);
