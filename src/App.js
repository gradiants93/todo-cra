import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todo from "./todo";

function App() {
  const [todos, setTodos] = useState([
    { text: "Walk dog", isCompleted: false },
    { text: "Feed cat", isCompleted: false },
  ]);
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    console.log(todos);
  };
  return (
    <div className="App">
      <h2>My todos:</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
