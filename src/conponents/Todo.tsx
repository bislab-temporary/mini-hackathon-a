import React from 'react';

type Props = {
  title: string;
};

const Todo = ({ title }: Props) => {
  return <p>{title}</p>;
};

export default Todo;
