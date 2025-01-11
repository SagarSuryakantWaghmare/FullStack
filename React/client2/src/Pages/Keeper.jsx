import { useState } from "react";

function Keeper() {
  const [task, setTask] = useState({
    title: "",
    task: ""
  });
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = () => {
    setTasks([...tasks, task]);
    setTask({
      title: "",
      task: ""
    });
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "orange", color: "white", height: "50px", alignItems: "center" }}>
        <h1>Todo List</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
        <input
          onChange={handleChange}
          value={task.title}
          type="text"
          placeholder="Enter your Title"
          name="title"
          style={{ marginBottom: "10px", padding: "10px", width: "300px" }}
        />
        <textarea
          onChange={handleChange}
          value={task.task}
          placeholder="Enter your task"
          name="task"
          style={{ marginBottom: "10px", padding: "10px", width: "300px", height: "100px" }}
        />
        <button onClick={handleSubmit} style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}>
          Add
        </button>
      </div>
      <div>
        <h1>Your Tasks</h1>
        <div>
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  margin: "5px 0",
                  width: "300px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  backgroundColor: "#f9f9f9"
                }}
              >
                <h3>{task.title}</h3>
                <p>{task.task}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Keeper;