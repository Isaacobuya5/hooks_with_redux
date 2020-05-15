import React from "react";
import TodoFilterItem from "./TodoFilterItem";

const TodoFilter = (props) => (
    <div>
    <TodoFilterItem name="all" {...props}/>{" / "}
    <TodoFilterItem name="active" {...props}/>{" / "}
    <TodoFilterItem name="completed" {...props}/>
    </div>
);

export default TodoFilter;