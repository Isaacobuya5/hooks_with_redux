import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import { StateContext } from "../contexts/StateContexts";

const TodoList = (props) => {
    const items = useContext(StateContext);
    return items.map((item, index) => <TodoItem key={index} {...item} {...props} />);
} 
export default TodoList;