import React from "react";

 const TodoItem = ({toggleTodoItems, removeTodoItem, id, title, completed}) => (
    <div style={{
        width: 400,
        height: 25
    }}>
    <input 
    type="checkbox"
    checked={completed}
    onChange={() => toggleTodoItems(id)}
    />
    {title}
    <button style={{ float: "right"}}
    onClick={() => removeTodoItem(id)}
    >
     X
    </button>
    </div>
);

export default TodoItem;