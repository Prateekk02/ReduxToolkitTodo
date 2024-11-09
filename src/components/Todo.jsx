import {useSelector, useDispatch} from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'



export default function Todo(){
    
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleEdit = (todo) =>{
        const newTodo =  prompt("Update todo text: ", todo.text);
        if(newTodo){
            dispatch(updateTodo({id: todo.id, text: newTodo}))
        }
    } 
    return <>
        <h1 >Todo</h1>

        <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}
                <button  onClick={() =>dispatch(removeTodo({id: todo.id}))}> Delete </button>
                <button  onClick={() => handleEdit(todo)}> Edit </button>
            </li>
        ))}

        </ul>
    </>
}