import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[
        {
            id:1,
            text:"hey"
        }
    ]
}


const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload//automatically detects text so it will be like action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos= state.todos.filter((todo) => todo.id !== action.payload)
            //same here instead of action.payload.id we using action.payload
        },
    }
})
//exporting as many reducers as there using the actions in the todoSlice
//used as methods in components
export const {addTodo,removeTodo} =todoSlice.actions


//here it will help to get into the store
export default todoSlice.reducer;