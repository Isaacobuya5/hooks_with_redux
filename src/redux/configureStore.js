import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

// initial state
export const initialState = {
    todos: [],
    filter: 'all'
};

export const store = createStore(rootReducer, applyMiddleware(thunk));