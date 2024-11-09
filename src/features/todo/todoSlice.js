import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"Hello There!!!"
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo : (state, action) =>{
            const newTodo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id) 
        },
        updateTodo : (state, action) =>{
            const todo = state.todos.find(todo => todo.id === action.payload.id);

            if(!todo) return

            todo.text = action.payload.text || todo.text;
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

const todoReducer =  todoSlice.reducer

export default todoReducer;