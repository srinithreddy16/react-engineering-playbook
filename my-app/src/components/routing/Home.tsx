import CounterDemo from "../counter/CounterDemo.tsx";
import CounterWithRedux from "../counter/CounterWithRedux";
import TaskList from '../hooks/TaskList'
import ToDoList from '../redux/ToDoList'

export default function Home() {
  return <>
    <h2>This is Home Component</h2>
    { <CounterDemo/> }
    <CounterWithRedux/>
    <TaskList/>
    <ToDoList/>
  </>
}
