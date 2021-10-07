import React, { useState } from 'react';

import Button from './components/Button';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>カウンターアプリ</h1>
      <div>{count}</div>
      <Button label="アップ" onClick={() => setCount((prevState) => prevState + 1)} />
      <Button label="10アップ" onClick={() => setCount((prevState) => prevState + 10)} />
      <Button label="ダウン" onClick={() => setCount((prevState) => prevState - 1)} />
      <Button label="10ダウン" onClick={() => setCount((prevState) => prevState - 10)} />
      <Button label="リセット" onClick={() => setCount(0)} />
      {count === 0 && <div>0なんですけど</div>}
    </>
  );
};

export default App;
