import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddTodo from "../components/AddTodo";
import { addNewTodo } from "../redux/actions/todos.actions";

// this component does not deal with any state from  redux thus we return an empty object
function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addNewTodo }, dispatch);
    // same as
    // return {
    //     addNewTodo: (...args) => dispatch(addNewTodo(...args));
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

