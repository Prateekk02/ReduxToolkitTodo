import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo(){
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const addTodoHandle = (e) =>{
        e.preventDefault();

        dispatch(addTodo({text: input}));
        setInput("")  // to clean to form
    }

    return <>
        <form onSubmit={addTodoHandle}>
        
            <input  type="text"
                    placeholder="Enter a todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button type="submit">Add Todo</button>

        </form>
    </>
}  