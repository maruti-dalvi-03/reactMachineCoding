import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const TodoSolution = () => {
    const [todos, setTodos] = useState([
{id: 1768037689487, text: 'first task'},
{id: 1768037686477, text: 'second task'}]);
    const [input, setInput] = useState('');
    console.log(todos)

    const addTodo = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            setTodos([...todos,  
                {
                    id: Date.now(),
                    text: input
                }
            ]);
            setInput('');
        }
    }

    const editTodo = (id) => () => {
        const newText = prompt("Edit todo:");
        if (newText !== null && newText.trim() !== '') {
            setTodos(todos.map((todo) => 
                todo.id === id ? { ...todo, text: newText } : todo
            ));
        }
    }

    const deleteTodo = (id) => () => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

  return (
    <div>
      <h4>To Do App</h4>
      <form>
        <input type="text" className='border mx-5 px-1' placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={addTodo} className=''>Add</button>
      </form>
      <p>List: 
        <ul>
            {todos.map((todo) => (
            <li key={todo.id} className='flex justify-between'>
                {todo.text}
                <div>
                    <button onClick={deleteTodo(todo.id)} className='border rounded-full p-1'><MdDeleteForever color='red' size={20}/></button>
                    <button onClick={editTodo(todo.id)} className='border rounded-full p-1'><FaEdit color='blue' size={18}/></button>
                </div>
                
            </li>
            
            
            ))} 
        </ul>
      </p>
    </div>
  )
}

export default TodoSolution
