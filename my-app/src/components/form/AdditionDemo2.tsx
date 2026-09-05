import { useState } from "react";

// add 2 numbers using state variables + form
export default function AdditionDemo2() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(20);

  return (
    <>
      <h3>Addition of 2 numbers using state variables</h3>

      <input type="number" value={num1} onChange={(e)=>setNum1(+e.target.value)} />
      <input type="number" value={num2} onChange={(e)=>setNum2(+e.target.value)} />

      <div>Addition of {num1} & {num2} is {num1+num2}</div>
    </>
  );
}
