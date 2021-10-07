import React from 'react';

type Props = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} style={{ margin: '0 0.4rem', border: '1px solid black' }}>
      {label}
    </button>
  );
};

export default Button;
