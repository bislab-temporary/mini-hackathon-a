import React, { useState } from 'react';

import Button from './components/Button';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const updateCounter = (num: number) => {
    setCount((prevState) => prevState + num);
  };

  return (
    <>
      <h1>カウンターアプリ</h1>
      <div>{count}</div>
      <Button label="アップ" onClick={() => updateCounter(1)} />
      <Button label="10アップ" onClick={() => updateCounter(10)} />
      <Button label="ダウン" onClick={() => updateCounter(-1)} />
      <Button label="10ダウン" onClick={() => updateCounter(-10)} />
      <Button label="リセット" onClick={() => updateCounter(-count)} />
      {count === 0 && <div>0なんですけど</div>}
    </>
  );
};

export default App;
