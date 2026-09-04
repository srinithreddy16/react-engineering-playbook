import { useState } from "react";
import UserCard from "../props/UserCard.tsx";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <>
    <div className="border border-3 rounded-3 m-3 p-3 text-center">
      <h3>Count: {count}</h3>

      <button className="btn btn-warning" onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button className="btn btn-danger mx-2" onClick={() => setCount(0)}>
        Reset
      </button>

      <button className="btn btn-success" onClick={() => {
        setCount((prevState) => prevState + 1); // async code
        console.log('count: ', count);
      }}>Increment</button>

      <UserCard name="Srinit Reddy" age={23} address='USA' />
    </div>

  </>
}
