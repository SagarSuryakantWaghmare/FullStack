import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const handleSubmit = () => {
    setTasks([...tasks, task]);
    setTask(""); // Clear the input field after adding the task
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleDelete = (index) => {
    return () => {
      const newTasks = tasks.filter((task, i) => i !== index);
      setTasks(newTasks);
    };
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px"
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer"
  };

  const taskListStyle = {
    listStyleType: "none",
    padding: "0"
  };

  const taskItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    margin: "5px 0",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9"
  };

  const deleteButtonStyle = {
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "white",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={task}
          placeholder="Enter your tasks"
          name="task"
          style={inputStyle}
        />
        <button onClick={handleSubmit} style={buttonStyle}>
          Add
        </button>
      </div>
      <div>
        <h1>Tasks</h1>
        <ul style={taskListStyle}>
          {tasks.map((task, index) => (
            <li key={index} style={taskItemStyle}>
              {task}
              <button onClick={handleDelete(index)} style={deleteButtonStyle}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;