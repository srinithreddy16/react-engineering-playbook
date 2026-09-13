import { useContext, useState } from "react";
import { userContext } from "../../utils/app_context";


export default function CounterDemo() {
  const [count, setCount] = useState(0);
  const userData = useContext(userContext);

  return (
    <div>
      <div>Context Data is: {userData}</div>
      <div id='count' data-testid="count">Count: {count}</div>
      <button onClick={() => setCount(count - 1)} >Decrement</button>
      <button onClick={() => setCount(0)} className="mx-2">Reset</button>
      <button name='increment' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
