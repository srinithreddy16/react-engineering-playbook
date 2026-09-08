import CounterComponent from "./CounterHOC";
/* export default function HoverCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return <>
      <h2>In HoverCounter Component - count is {count}</h2>
      <button onMouseEnter={increment}>Click me</button>
    </>
} */

function HoverCounter(props:any){                   // ← Original Component
    return <button onMouseOver={props.increment}> Clicked {props.count} Times</button>
}
export default CounterComponent(HoverCounter);   // ← Enhanced Component (what body imports)
