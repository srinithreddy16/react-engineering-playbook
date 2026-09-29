import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, reset } from "./counterSlice";

export default function CounterWithRedux() {
  const count = useSelector((state: any) => state.counter); // Selector
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter With Redux</h2>
      <h3>Count:{count}</h3>

      <button onClick={()=>{dispatch(decrement())}} >decrement</button>
      <button onClick={()=>{dispatch(reset())}} className="mx-1">Reset</button>
      <button onClick={()=>{dispatch(increment())}}>increment</button>
    </>
  );
}