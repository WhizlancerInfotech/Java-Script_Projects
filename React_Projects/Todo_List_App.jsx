import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <input
        className="border p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="ml-2 p-2 bg-blue-500 text-white" onClick={addTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mt-2 flex justify-between">
            {task}
            <button
              className="bg-red-500 text-white px-2"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
