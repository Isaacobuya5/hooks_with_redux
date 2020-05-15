import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoFilter from "../components/TodoFilter";
import { filterTodosList  } from "../redux/actions/todos.actions";

function mapStateToProps({filter}) {
    return {
        filter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filterTodosList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);