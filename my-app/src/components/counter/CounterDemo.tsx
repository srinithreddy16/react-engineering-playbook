import { useContext, useState } from "react";
import { userContext } from "../../utils/app_context";
import { useTime } from "../../utils/TimeContext";
import { useTheme } from "../../utils/ThemeContext";

export default function CounterDemo() {
  const [count, setCount] = useState(0);
  const userData = useContext(userContext);
  const time = useTime();
  const themeObj:any = useTheme();
  console.log(themeObj, themeObj.toggleTheme)


  return (
    <div>
      <h1>Time: {time}</h1>
       <div>
        current Theme: {themeObj.theme}
        <div>
          <button onClick={themeObj.toggleTheme}>Toggle Theme</button>
        </div>
      </div>
      <div>Context Data is: {userData}</div>
      <div id='count' data-testid="count">Count: {count}</div>
      <button onClick={() => setCount(count - 1)} >Decrement</button>
      <button onClick={() => setCount(0)} className="mx-2">Reset</button>
      <button name='increment' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
