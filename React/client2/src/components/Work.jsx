import { useState } from 'react'

function Work() {

    const[task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);
    const[done,setDone]=useState(false);
    const handleChange=(e)=>{
        setTask(e.target.value);
    }
    const handleSubmit=()=>{
        setTasks([...tasks,task]);
        setTask("");
    };
    const handleDone=()=>{
      setDone((preValue)=>{
        return !preValue;
      });
    }
  return (
    <>
    <div>
        <h1>Todo List</h1>
        <input type="text" placeholder='Enter your task' onChange={handleChange} name='task' />
        <button onClick={handleSubmit}>Add</button>
    </div>
    <div>Tasks:</div>
    <ul>
        {tasks.map((task,index)=>{
            return(
                <li style={{textDecoration:done?"line-through":"none"}} onDoubleClick={handleDone} key={index}>{task}</li>
            )
        })}
    </ul>
    </>
  )
}

export default Work