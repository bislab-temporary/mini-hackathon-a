import React, { useState, ChangeEvent } from 'react';

import Todo from './conponents/Todo';

type TodoType = {
  title: string;
};

const initialTodos: TodoType[] = [
  { title: '資料を作る' },
  { title: '歯医者に行く' },
  { title: '課題をやる' },
];

const App = () => {
  const [title, setTitle] = useState<string>('');
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);

  return (
    <>
      <input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            const newTodos = [...todos, { title: title }];
            setTodos(newTodos);
          }
        }}
      />
      {todos.map((todo, i) => (
        <Todo key={todo.title} index={i} title={todo.title} todos={todos} setTodos={setTodos} />
      ))}
    </>
  );
};

export default App;
