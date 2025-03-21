import { useState, useEffect } from "react";
import { TodoContextProvider } from "./context";

import "./App.css";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  //one of the simple example vachesi nenu App.jsx ->Navbar -> Profile -> ProfileMenu
  //intha drilling lekunda direct ga profileMenu access cheyadaniki
  //ContextApi doesn't use prop drilling saves time and gives better security
  //ContextApi acts as built in API

  //❤️❤️❤️ adding to the Todo
  const addTodo = (todo) => {
    //setTodos(todos) illa chesthe main disadvantage vachi unna todos anni delete ayyi new todo update avvutundhi
    //todo is taken from the form
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    //...prev is used to take the previous todos values and we can add them in after or before the new todo
    //here we are using id as Date.now() for unique id
    //and  we are spreading that todo values inside the newly created todo and add it to the particular id(which generated by the time)
  };

  //❤️❤️❤️ deleting  the Todo

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
    //filter is used to take based on the conditions and that values are seted to the setTodo
  };

  //❤️❤️❤️ updating  the Todo

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  //❤️❤️❤️ Toogle the Todo

  const ToogleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
    //if the condition  is failed don't chane the Todo
  };

  //logic was diffcult but see these
  //  if(prevTodo.id===id){
  //   ...prevTodo,completed:!prevTodo.completed
  //  }else{
  //   prevTodo
  //  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    //local storage contains two elements getItem(by key) setItem(by key with value)
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, ToogleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* todo.id is used instead of array index because while deleting todo.id can 
            easily be deleted and no problem will happen */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
