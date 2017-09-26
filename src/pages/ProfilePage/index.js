// @flow
// Container for ProfilePage Component
import ProfilePage from "./ProfilePage";
import { connect } from "react-redux";
import * as actions from "./actions"; // mapDispatchToProps
import { navToDreamPage } from "../../navigation/navActions";
import { getAuth } from "../../reducers/rootReducer";

const mapStateToProps = state => ({
	auth: { ...getAuth(state) }
});

export default connect(mapStateToProps, {
	...actions,
	navToDreamPage
})(ProfilePage);
