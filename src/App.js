import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn JavaScript", completed: false },
  { id: 3, text: "Make a project", completed: false }
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