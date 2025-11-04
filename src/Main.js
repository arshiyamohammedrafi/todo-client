import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");   
  const [tasks, setTasks] = useState([]); 

  const handleAdd = () => {
    if (task.trim() === "") return;       
    setTasks([...tasks, task]);           
    setTask("");                          
  };

  return (
    <div className="App">
      <h2>To Do App 📝</h2>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;