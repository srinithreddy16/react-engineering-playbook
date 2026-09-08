import { useState } from "react";

const CounterComponent = (OriginalComponent:any) => {  //HOC
  function CounterHOC() {                             // ← this becomes the Enhanced Component
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return <OriginalComponent count={count} increment={increment} />;
  }
  return CounterHOC;       // ← Enhanced Component returned
};
export default CounterComponent;

