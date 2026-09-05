import { useRef } from "react";

export default function AdditionDemo1() {
  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)
  const addition = () => {
    const val1 = +(inputRef1.current?.value || 0);
    const val2 = +(inputRef2.current?.value || 0);
    console.log(`Addition of ${val1} and ${val2} is ${val1 + val2}`);
  };
  return <div>
    <h3>Addition of 2 numbers using Ref concept</h3>
    num1: <input ref={inputRef1} />
    num2: <input ref={inputRef2} />
    <button onClick={addition}>Add</button>
    <hr/>
  </div>
}
