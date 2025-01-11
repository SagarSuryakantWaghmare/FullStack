import { useState } from 'react'
import Tasks from './Tasks';
function InputArea() {
    const[task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);
    const handleChange=(e)=>{
       setTask(e.target.value);
    }
    const handleSubmit=()=>{
        setTasks([...tasks,task]);
        setTask("");
    }
  return (
    <>
    <div>
        <input type="text" placeholder='Enter your task' name='task' onChange={handleChange}/>   
        <button onClick={handleSubmit}>Add</button>
    </div>
    <div>
       <Tasks tasks={tasks}/>
    </div>
    </>
  )
}

export default InputArea