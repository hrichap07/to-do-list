import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import About from './pages/About';

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
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
      </nav>

      <Routes>

        <Route
          path="/"
          element={
            <div className="todo-container">
              <Header />
              <AddTodo setTodos={setTodos} />
              <Todos todos={todos} setTodos={setTodos} />
            </div>
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;