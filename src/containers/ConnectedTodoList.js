import { connect } from "react-redux";
import TodoList from "../components/TodoList";

function mapStateToProps({ todos, filter }) {
    return { todos , filter }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
