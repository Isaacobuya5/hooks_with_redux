import React from "react";

const TodoFilterItem = ({name,filterTodos,filter='all' }) => {
    const style = {
        color: "blue",
        cursor: "pointer",
        fontWeight: (filter === name ) ? 'bold' : 'normal'
    }

    return <span style={style} onClick={() => filterTodos(name)}>{name}</span>
}

export default TodoFilterItem;