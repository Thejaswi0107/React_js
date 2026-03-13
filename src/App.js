import React, { useState, useRef } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const inputRef = useRef();

  const addTask = () => {

    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: task
    };

    setTaskList([...taskList, newTask]);
    setTask("");

    inputRef.current.focus();
  };

  const deleteTask = (id) => {
    const updatedList = taskList.filter((item) => item.id !== id);
    setTaskList(updatedList);
  };

  return (
    <div className="container">

      <h1>Todo List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          ref={inputRef}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <table>

        <thead>
          <tr>
            <th>S.No</th>
            <th>Task Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {taskList.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default App;