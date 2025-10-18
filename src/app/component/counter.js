'use client'
import { useState } from "react";


export default function Counter(props){
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>This is counter component</p>
      {count}
      <button type='button' onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button type='button' onClick={() => setCount(count - 1)}>Decrease Counter</button>
      <button type='button' onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  );
}