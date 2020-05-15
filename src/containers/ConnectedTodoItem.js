import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoItem from "../components/TodoItem";
import { toggleTodoItems, removeTodoItem } from "../redux/actions/todos.actions";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({toggleTodoItems, removeTodoItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);