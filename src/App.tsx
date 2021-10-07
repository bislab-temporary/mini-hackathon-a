import React from 'react';

import Todo from './conponents/Todo';

const todos = [{ title: '資料を作る' }, { title: '歯医者に行く' }, { title: '課題をやる' }];

const App = () => {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.title} title={todo.title} />
      ))}
    </>
  );
};

export default App;
