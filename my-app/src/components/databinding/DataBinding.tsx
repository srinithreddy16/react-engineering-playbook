import { useState } from "react";
function databinding() {
    let count = 0; // Not a State Variable ( Local Variable)
    const increment = () => {
    count = count + 1;
    console.log(`Count: ${count}`);
  };

  let [myCount, updateMyCount] = useState(0); // State Variable
  const incrementCount = () => {
    updateMyCount(myCount++);
  };

  
  return (
    <>
      <h3 className="text-center">Lets learn Data Binding</h3>

      <div className="border border-3 rounded-3 p-3 m-3">
        <div>Local variable count: {count}</div>
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
      </div>

      <div className="border border-3 rounded-3 p-3 m-3">
        <div>State variable MyCount: {myCount}</div>
        <button className="btn btn-primary" onClick={incrementCount}>
          Increment
        </button>
      </div>
    </>
  )
}

export default databinding
