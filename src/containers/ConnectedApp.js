import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../App";
import { fetchTodosAsync } from "../redux/actions/todos.actions";

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTodosAsync }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);