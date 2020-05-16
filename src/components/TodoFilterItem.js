import React from "react";

const TodoFilterItem = ({name,filterTodosList,filter='all' }) => {
    const style = {
        color: "blue",
        cursor: "pointer",
        fontWeight: (filter === name ) ? 'bold' : 'normal'
    }

    return <span style={style} onClick={() => filterTodosList(name)}>{name}</span>
}

export default TodoFilterItem;