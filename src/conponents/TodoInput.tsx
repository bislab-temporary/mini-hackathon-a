import { Input } from '@chakra-ui/react';
import React, { useState, ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from 'react';

type TodoType = {
  title: string;
};

type Props = {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  status: boolean[];
  setStatus: Dispatch<SetStateAction<boolean[]>>;
};

const TodoInput = ({ todos, setTodos, status, setStatus }: Props) => {
  const [title, setTitle] = useState<string>('');

  return (
    <Input
      variant="filled"
      my={3}
      placeholder="Todoを追加"
      type="text"
      onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          const newTodos = [...todos, { title: title }];
          const newStatus = [...status, false];
          setTodos(newTodos);
          setStatus(newStatus);
        }
      }}
    />
  );
};

export default TodoInput;
