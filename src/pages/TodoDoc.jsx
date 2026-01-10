import CodeBlock from "../components/CodeBlock";
import TodoSolution from "../solutions/TodoSolution";

function TodoDoc() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* DOCUMENTATION */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Todo App</h1>

        <div>
          <h2 className="text-xl font-semibold mb-2">Problem Statement</h2>
          <p className="text-gray-700">
            Build a Todo application where users can add, edit, and delete todos.
            The application should manage state using React hooks.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Approach</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Use useState to store todos and input value</li>
            <li>Add todos using immutable state updates</li>
            <li>Edit todos by updating the matching id</li>
            <li>Delete todos using array filter</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Code Snippet</h2>

          <CodeBlock
  code={`import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const addOrUpdateTodo = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      setTodos(
        todos.map(todo =>
          todo.id === editId
            ? { ...todo, text: input }
            : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }

    setInput("");
  };

  const editTodo = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addOrUpdateTodo}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
 />

        </div>
      </section>

      {/* LIVE PREVIEW */}
      <section className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <TodoSolution />
      </section>

    </div>
  );
}

export default TodoDoc;
