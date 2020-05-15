import { combineReducers } from "redux";
import { filtersReducer } from "./filters.reducer";
import { todosReducer } from "./todos.reducer";

// export const rootReducer = (state, action) => ({
//     todos: todosReducer(state.todos, action),
//     filter: filtersReducer(state.filter, action)
// });

export const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filtersReducer
});