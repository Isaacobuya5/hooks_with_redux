import React, {useContext, useMemo} from "react";
import ConnectedTodoItem from "../containers/ConnectedTodoItem";
import { StateContext } from "../contexts/StateContexts";

const TodoList = ({filter, todos}) => {
    const filteredTodos = useMemo(() => {
        switch(filter) {
          case 'active':
            return todos.filter(todo => todo.completed === false);
          case 'completed':
            return todos.filter(todo => todo.completed === true);
          default:
            case 'all':
              return todos;
        }
      },[filter, todos]);
    
    const items = useContext(StateContext);
    return items.map((item, index) => <ConnectedTodoItem key={index} {...item} />);
} 
export default TodoList;