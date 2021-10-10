import { Input } from '@chakra-ui/react';
import React, { useState, ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from 'react';

import { TodoType } from '@/types/TodoType';

type Props = {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
};

const TodoInput = ({ todos, setTodos }: Props) => {
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
          const newTodos = [
            ...todos,
            { id: String(todos.length), title: title, isCompleted: false },
          ];
          setTodos(newTodos);
        }
      }}
    />
  );
};

export default TodoInput;
