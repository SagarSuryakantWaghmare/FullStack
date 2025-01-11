

function Tasks(props) {
  return (
    <div>
        <ul>
            {props.tasks.map((task,index)=>{
                return(
                    <li key={index}>{task}</li>     
                )
            })}
        </ul>
    </div>
  )
}

export default Tasks