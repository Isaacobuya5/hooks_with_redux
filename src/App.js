import React, {useState, useEffect, useMemo} from 'react';
import { initialState ,store } from "./redux/configureStore";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";


import { StateContext } from "./contexts/StateContexts";
import fetchAPIsTodos from "./api";
import { fetchTodos, addNewTodo, removeTodoItem, filterTodosList, toggleTodoItems } from "./redux/actions/todos.actions";

import './App.css';

const { dispatch } = store;

const App = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    return unsubscribe;
  },[]);
  
  useEffect(() => {
    fetchAPIsTodos().then(todos => dispatch(fetchTodos(todos)))
  },[]);

  const filteredTodos = useMemo(() => {
    const { filter, todos } = state;

    switch(filter) {
      case 'active':
        return todos.filter(todo => todo.completed === false);
      case 'completed':
        return todos.filter(todo => todo.completed === true);
      default:
        case 'all':
          return todos;
    }
  },[state]);

    //adding a new todo
   function addTodo(title) {
         dispatch(addNewTodo(title));
   }

 // toggle completion status of todo
function toggleTodo(id) {
    dispatch(toggleTodoItems(id));
}

function removeTodo(id) {
  dispatch(removeTodoItem(id));
}

function filterTodos(filter) {
dispatch(filterTodosList(filter));
}

return (
      <StateContext.Provider value={filteredTodos}>
      <div style={{ width: 400, margin: 20 }}>
        <Header />
        <AddTodo addTodo={addTodo}/>
        <hr />
        <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} />
        <hr />
        <TodoFilter filter={state.filter} filterTodos={filterTodos}/>
      </div>
      </StateContext.Provider>
    );

}

export default App;
