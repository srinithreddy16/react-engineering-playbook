/* eslint-disable react-hooks/immutability */
import { useState } from "react";

function DataBinding() {
    let count = 0; // Not a State Variable ( Local Variable)
    const increment = () => {
    count = count + 1;
    console.log(`Count: ${count}`);
  };

  const [myCount, updateMyCount] = useState(0); // myCount is State Variable
  const incrementCount = () => {
    updateMyCount(myCount + 1);
  };

  const [name, setName] = useState('Srinith'); //name is State variable

  const [num, setNum] = useState(2);  //num is  State Variable
  
  return (
    <>
      <h3 className="text-center">Lets learn Data Binding</h3>

      <div className="border border-3 rounded-3 p-3 m-3">
         <div> 1 Way Binding</div>
        <div>Local variable count: {count}</div>
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
      </div>

      <div className="border border-3 rounded-3 p-3 m-3">
        <div> 1 Way Binding with State Variable</div>
        <div>State variable MyCount: {myCount}</div>
        <button className="btn btn-primary" onClick={incrementCount}>
          Increment
        </button>
      </div>

      <div className="border border-3 rounded-3 p-3 m-3">
        <div> 2 Way Binding</div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>Name is(2-Way): {name}</div>
      </div>

      <div className="border border-3 rounded-3 p-3 m-3">
        <div> Conditional Rendering</div>
        <div>Even or Odd::</div>
        <input type="number" value={num} onChange={(e) => setNum(+e.target.value)}  />

        {num%2 == 0 ? <div>{num} is even Number</div> : <div>{num} is odd Number</div>}
      </div> 
    </>
  )
}

export default DataBinding
