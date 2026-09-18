import { useState } from 'react';

function AddTodo({ setTodos }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = () => {
    if (title.trim() === '' || description.trim() === '') {
      return;
    }

    setTodos((previousTodos) => [
      ...previousTodos,
      {
        id: previousTodos.length + 1,
        title: title,
        description: description,
        completed: false
      }
    ]);

    setTitle('');
    setDescription('');
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;