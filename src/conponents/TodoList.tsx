import { Stack, StackDivider } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

import Todo from './Todo';

type TodoType = {
  title: string;
};

type Props = {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  status: boolean[];
  setStatus: Dispatch<SetStateAction<boolean[]>>;
};

const TodoList = ({ todos, setTodos, status, setStatus }: Props) => {
  return (
    <Stack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {todos.map((todo, i) => (
        <Todo
          key={todo.title}
          index={i}
          title={todo.title}
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
        />
      ))}
    </Stack>
  );
};

export default TodoList;
