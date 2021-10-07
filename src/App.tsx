import React, { useState, ChangeEvent } from 'react';

import Todo from './conponents/Todo';

const todos = [{ title: '資料を作る' }, { title: '歯医者に行く' }, { title: '課題をやる' }];

const App = () => {
  const [title, setTitle] = useState<string>('');

  return (
    <>
      <input onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} />
      {todos.map((todo) => (
        <Todo key={todo.title} title={todo.title} />
      ))}
    </>
  );
};

export default App;
