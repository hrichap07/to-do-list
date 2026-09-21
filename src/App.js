import { useState } from 'react';

import './App.css';

import Header from './components/Header';

import Todos from './components/Todos';

import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn React basics and components',
      completed: false
    },
    {
      id: 2,
      title: 'Learn JavaScript',
      description: 'Practice JavaScript concepts',
      completed: false
    },
    {
      id: 3,
      title: 'Make a project',
      description: 'Build a project using React',
      completed: false
    }
  ]);

  return (
    <div className="todo-container">
      <Header />
      <AddTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;