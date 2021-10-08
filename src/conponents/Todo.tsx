import { CloseIcon } from '@chakra-ui/icons';
import { Flex, Spacer, Editable, EditablePreview, EditableInput, Checkbox } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

type TodoType = {
  title: string;
};

type Props = {
  index: number;
  title: string;
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  status: boolean[];
  setStatus: Dispatch<SetStateAction<boolean[]>>;
};

const Todo = ({ index, title, todos, setTodos, status, setStatus }: Props) => {
  const removeTodo = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleStatus = () => {
    const newStatus = [...status];
    newStatus[index] = !newStatus[index];
    setStatus(newStatus);
  };

  return (
    <Flex align="center" w="90%" m="0 auto">
      <Checkbox align="center" w="5%" m="0 auto" onChange={() => handleStatus()} />
      <Editable defaultValue={title}>
        {status[index] === true ? <EditablePreview as="s" /> : <EditablePreview />}
        <EditableInput />
      </Editable>
      <Spacer />
      <CloseIcon onClick={() => removeTodo()} w={3} h={3} _hover={{ cursor: 'pointer' }} />
    </Flex>
  );
};

export default Todo;
