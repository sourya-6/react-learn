import { createContext,useContext } from "react"


//here ikkada chusinatu ayithe createContext lo manaku object untundhi so aa object lo 
//manaki array untundhi aa array lo multiple objects unnai
//aa array ki functionalities like add,update,delete,toogle
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    ToogleTodo:(todo)=>{}
})

//its a hook where we can use multiple times
export const useTodo=()=>{
    useContext(TodoContext);
}

//instead of using it separately as TodoContext.Provider while wrapping
export const TodoContextProvider=TodoContext.Provider;