import React from 'react';

import Header from "./components/Header";
import ConnectedAddTodo from "./containers/ConnectedAddTodo";
import ConnectedTodoList from "./containers/ConnectedTodoList";
import ConnectedTodoFilter from "./containers/ConnectedTodoFilter";

import './App.css';


const App = () => {

return (
      <div style={{ width: 400, margin: 20 }}>
        <Header />
        <ConnectedAddTodo />
        <hr />
        <ConnectedTodoList  />
        <hr />
        <ConnectedTodoFilter />
      </div>
    );

}

export default App;
