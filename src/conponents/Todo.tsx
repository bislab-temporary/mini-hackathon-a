import { CloseIcon } from '@chakra-ui/icons';
import { Flex, Spacer, Editable, EditablePreview, EditableInput } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

type TodoType = {
  title: string;
};

type Props = {
  index: number;
  title: string;
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
};

const Todo = ({ index, title, todos, setTodos }: Props) => {
  const removeTodo = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Flex align="center" w="90%" m="0 auto">
      <Editable defaultValue={title}>
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Spacer />
      <CloseIcon onClick={() => removeTodo()} w={3} h={3} _hover={{ cursor: 'pointer' }} />
    </Flex>
  );
};

export default Todo;
