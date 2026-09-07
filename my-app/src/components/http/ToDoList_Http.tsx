import { useState } from 'react';
import client from '../../utils/api'

export default function ToDoList_Http() {
  const [todos,setToDos] = useState<any[]>([]);

  const fetchToDosData = async()=>{
    const response = await client.get('/todos')
    setToDos(response.data);
  }

  return <>
    <h3 className="text-center">Todo List Using Http</h3>
    <button onClick={fetchToDosData}>fetch Data</button>
    <table className="table table-bordered">
        <tbody>
            {todos.map(todo=>{
                return <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.userId}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed.toString()}</td>
                </tr>
            })}
        </tbody>
    </table>
  </>
}