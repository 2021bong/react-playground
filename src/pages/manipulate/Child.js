import { useState, forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    setCount,
  }));
  const [count, setCount] = useState(1);
  return (
    <>
      <p className='count'>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>up</button>
    </>
  );
});

export default Child;
