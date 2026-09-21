import { useState, useEffect } from 'react';

function AddTodo({ setTodos }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message !== '') {
      const timer = setTimeout(() => {
        setMessage('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message]);

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
    setMessage('Todo added successfully!');
  };

  return (
    <div className="add-todo">

      {message && <p>{message}</p>}

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