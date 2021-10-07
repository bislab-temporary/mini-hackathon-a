import React from 'react';

type Props = {
  title: string;
};

const Todo = ({ title }: Props) => {
  return (
    <>
      <p>{title}</p>
      <button style={{ border: '1px solid gray', padding: '0.2rem', borderRadius: '5px' }}>
        削除する
      </button>
    </>
  );
};

export default Todo;
