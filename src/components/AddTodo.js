import React, {useState} from "react";

const AddTodo = ({addNewTodo}) => {
    const [input, setInput] = useState('');
 
        // input field handler
    const handleInput = (e) => {
            e.preventDefault();
            const { value } = e.target;
            setInput(value);
        }

    const handleAdd = (e) => {
            e.preventDefault();
            if (input) {
                addNewTodo(input);
                // clear the input field
                setInput('');
            }
        }

        return (
            <form 
            style={{ margin: "20px 0px"}}
            onSubmit={handleAdd}
            >
                <input 
                type="text" 
                placeholder="enter new task here..." 
                style={{
                    width: 450,
                    height: 15
                }} 
                value={input}
                onChange={handleInput}
                />
                <input 
                type="submit"
                style={{
                    float: "right",
                    marginTop: 2
                }}
                value="add"
                disabled={!input}
                />
            </form>
          );
}

export default AddTodo;