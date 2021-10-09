import { CloseIcon } from '@chakra-ui/icons';
import {
  Flex,
  Spacer,
  Editable,
  EditablePreview,
  EditableInput /*Checkbox*/,
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

type TodoType = {
  title: string;
  isCompleted: boolean;
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

  // const handleStatus = ({ index, title, todos, setTodos }: Props) => {
  //   const newStatus = [...todos];
  //   newStatus.isCompleted[index] = !newStatus[index];
  //   setStatus(newStatus);
  // };

  return (
    <Flex align="center" w="90%" m="0 auto">
      {/* {<Checkbox mr={2} onChange={() => handleStatus()} />} */}
      <Editable defaultValue={title}>
        {status[index] ? <EditablePreview as="s" /> : <EditablePreview />}
        <EditableInput />
      </Editable>
      <Spacer />
      <CloseIcon onClick={() => removeTodo()} w={3} h={3} _hover={{ cursor: 'pointer' }} />
    </Flex>
  );
};

export default Todo;
