function Todo({ title, description, completed, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <div>
        <h3
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          {title}
        </h3>

        <p>{description}</p>
      </div>

      <div>
        <button onClick={onToggle}>
          {completed ? 'Undo' : 'Complete'}
        </button>

        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;