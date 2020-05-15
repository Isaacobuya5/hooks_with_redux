import React, {useState, useEffect, useMemo} from 'react';

import Header from "./components/Header";
import ConnectedAddTodo from "./containers/ConnectedAddTodo";
import ConnectedTodoList from "./containers/ConnectedTodoList";
import ConnectedTodoFilter from "./containers/ConnectedTodoFilter";


import './App.css';

// const { dispatch } = store;

const App = () => {
  // const [state, setState] = useState(initialState);

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => setState(store.getState()));
  //   return unsubscribe;
  // },[]);
  

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
