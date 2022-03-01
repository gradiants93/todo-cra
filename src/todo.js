const Todo = ({ todo, toggleTodo, index }) => {
  return (
    <div>
      <label htmlFor={`todo-${index}`}>
        <input
          id={`toto-${index}`}
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(index)}
        />
        {todo.text}
      </label>
    </div>
  );
};
export default Todo;
