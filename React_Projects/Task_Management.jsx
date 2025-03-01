import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, `Task ${tasks.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>{tasks.map((task, index) => <li key={index}>{task}</li>)}</ul>
    </div>
  );
}
