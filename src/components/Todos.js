import Todo from './Todo';

function Todos({ todos, setTodos }) {

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todos">
      <h2>My Todos</h2>

      {todos.length === 0 ? (
        <p>No Todos to display</p>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))
      )}
    </div>
  );
}

export default Todos;