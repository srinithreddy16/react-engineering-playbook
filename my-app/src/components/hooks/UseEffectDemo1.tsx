import { useState, useEffect } from "react";

export default function UseEffectDemo1() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  useEffect(() => {
    console.log("use effect called after the component is rendered...");
  }, [a, b]);

  return (
    <>
      <h3>UseEffectDemo1</h3>
      <h1>
        a:{a} b:{b} c:{c}
      </h1>
      <button onClick={() => setA(15)}>update A</button>
      <button onClick={() => setB(25)} className="mx-2">
        update B
      </button>
      <button onClick={() => setC(35)}>update C</button>
    </>
  );
}
