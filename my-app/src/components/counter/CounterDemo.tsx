import { useState } from "react";
export default function CounterDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div id='count' data-testid="count">Count: {count}</div>
      <button onClick={() => setCount(count - 1)} >Decrement</button>
      <button onClick={() => setCount(0)} className="mx-2">Reset</button>
      <button name='increment' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
