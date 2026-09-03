import { useState } from "react";

function TaskList() {
    const [tasks, setTasks] = useState([
    { id: 1, title: "Complete Angular assignment", completed: false },
    { id: 2, title: "Review pull requests", completed: true },
    { id: 3, title: "Prepare project report", completed: false },
    { id: 4, title: "Attend team meeting", completed: true },
    { id: 5, title: "Update documentation", completed: false }
    ]);
    const [filter, setFilter] = useState("All");
    const toggleTask = (id:number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };
  const filteredTasks = tasks.filter(task =>
    filter === "Completed" ? task.completed :
    filter === "Pending" ? !task.completed : true
  );
  const completedCount = tasks.filter(task => task.completed).length;
  return (
    <div>
      <h2>Task List</h2>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>
      <br /><br />
      {
        filteredTasks.map(task => (
          <div key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.title}
            </span>
          </div>
        ))
      }
      <h3>{completedCount} out of {tasks.length} tasks are completed</h3>
    </div>
  );
}


export default TaskList