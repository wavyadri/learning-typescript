import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import React, { useState } from 'react';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      // empty input
      setTodo('');
    }
  };

  return (
    <div className='App'>
      <h1 className='heading'>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
