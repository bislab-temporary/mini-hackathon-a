import { Container } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

import TodoInput from './conponents/TodoInput';
import TodoList from './conponents/TodoList';

type TodoType = {
  title: string;
  isCompleted: boolean;
};

const initialTodos: TodoType[] = [
  { title: '資料を作る', isCompleted: false },
  { title: '歯医者に行く', isCompleted: false },
  { title: '課題をやる', isCompleted: false },
];

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);
  useEffect(() => {
    console.table(todos);
  }, [todos]);
  return (
    <Container>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  );
};

export default App;
