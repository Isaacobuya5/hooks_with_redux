import React from "react";

 const TodoItem = ({toggleTodo, id, removeTodo, title, completed}) => (
    <div style={{
        width: 400,
        height: 25
    }}>
    <input 
    type="checkbox"
    checked={completed}
    onChange={() => toggleTodo(id)}
    />
    {title}
    <button style={{ float: "right"}}
    onClick={() => removeTodo(id)}
    >
     X
    </button>
    </div>
);

export default TodoItem;