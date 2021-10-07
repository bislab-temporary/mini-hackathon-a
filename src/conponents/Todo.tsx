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
    <>
      <p>{title}</p>
      <button
        onClick={() => removeTodo()}
        style={{ border: '1px solid gray', padding: '0.2rem', borderRadius: '5px' }}
      >
        削除する
      </button>
    </>
  );
};

export default Todo;
