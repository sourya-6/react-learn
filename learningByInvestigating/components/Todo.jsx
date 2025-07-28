import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      text: input,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <>
      <input
        className="bg-amber-50 text-violet-400"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-600" onClick={addTodo}>
        Add Todo
      </button>

      
      <ul className="text-amber-50">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border-b border-gray-600"
          >
            {todo.text}
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              onClick={() => removeTodo(todo.id)}
            >
              Remove ❤️
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
