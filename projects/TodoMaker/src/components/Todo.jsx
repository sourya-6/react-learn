import { useState,useRef,useEffect } from "react";
import React from 'react';

function Todo() {
    const [todos, setTodos] = useState(() => {
        const state = localStorage.getItem('todos');
        if (!state || state === "undefined") {
            return [{ id: 1, task: 'first task' }];
        }
        try {
            return JSON.parse(state);
        } catch {
            return [{ id: 1, task: 'first task' }];
        }
    });
    const conc = useRef(null)
    const [input, setInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        const newTodo = [...todos, { id: Date.now(), task: input }];
        setTodos(newTodo);
        setInput('');
        conc.current.focus();
    };

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    

    const deleteTodo = (id) => {
        const filterTodo = todos.filter((todo) => todo.id !== id);
        setTodos(filterTodo);
        localStorage.setItem('todos', JSON.stringify(filterTodo));
    };

    const toggleTodo = (id) => {
        const updatedTodo = todos.map(todo=>todo.id == id?{...todo,completed:!todo.completed}:todo);
        setTodos(updatedTodo);
        localStorage.setItem('todos',JSON.stringify(updatedTodo))
    }

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg">
            <form onSubmit={addTodo}>
                <div className="flex gap-2 mb-4">
                    <input
                        className="bg-black text-amber-400 border border-gray-300 rounded-md p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        type="text"
                        placeholder='Enter to add new Todo'
                        ref={conc}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="submit"
                    >
                        Create Todo
                    </button>
                </div>
            </form>
            
<ul>
    {todos.map(todo => (
        <li className={`bg-gray-800 flex items-center mb-2 rounded-md ${todo.completed ? 'bg-yellow-300 ' : ''}`} key={todo.id}>
            <p
                className={`p-2  text-center ${todo.completed?'text-black  line-through ':'text-white'}`}
                style={{ width: "200px", minWidth: "200px", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
                {todo.task}
            </p>
            <button
                className="p-2 bg-amber-300 rounded-2xl mx-1"
                onClick={() => toggleTodo(todo.id)}
            >
                Completed
            </button>
            <button
                className="p-2 bg-violet-300 rounded-2xl mx-1"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete ❌
            </button>
        </li>
    ))}
</ul>

        </div>
    );
}

export default Todo