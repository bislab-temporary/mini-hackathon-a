import { Container } from '@chakra-ui/react';
import React, { useState } from 'react';

import TodoInput from './conponents/TodoInput';
import TodoList from './conponents/TodoList';

type TodoType = {
  title: string;
};

const initialTodos: TodoType[] = [
  { title: '資料を作る' },
  { title: '歯医者に行く' },
  { title: '課題をやる' },
];

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);
  const [status, setStatus] = useState<boolean[]>([false, false, false]);

  return (
    <Container>
      <TodoInput todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} />
    </Container>
  );
};

export default App;
