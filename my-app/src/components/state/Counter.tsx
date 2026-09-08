import { useCallback, useState } from "react";
import UserCard from "../props/UserCard.tsx";

export default function Counter() {
  const [count, setCount] = useState(0);

  /*
  // Without useCallback:
  // A new add function is created on every Counter re-render.
  // Even with React.memo on UserCard, the child still re-renders
  // because the add prop reference changes on increment/decrement/reset.
  const add = (a:number, b:number) =>{
    console.log(`Addition of ${a} and ${b} is ${a+b}`)
  }
  */

  // With useCallback:
  // The same add function reference is reused until deps change.
  // React.memo on UserCard can skip re-render when name, age, address stay the same.
  const add = useCallback((a: number, b: number) => {
    console.log(`Addition of ${a} and ${b} is ${a+b}`);
  }, []);

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

      <UserCard name="Srinit Reddy" age={23} address='USA' add={add} />
    </div>

  </>
}
