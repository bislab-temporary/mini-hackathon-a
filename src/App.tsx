import { Container } from '@chakra-ui/react';
import React, { useState } from 'react';

import TodoInput from '@/conponents/TodoInput';
import TodoList from '@/conponents/TodoList';
import { TodoType } from '@/types/TodoType';

const initialTodos: TodoType[] = [
  { id: '0', title: '資料を作る', isCompleted: false },
  { id: '1', title: '歯医者に行く', isCompleted: false },
  { id: '2', title: '課題をやる', isCompleted: false },
];

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);

  return (
    <Container>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  );
};

export default App;
