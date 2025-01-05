import { useState } from "react";

function EventHandling() {
    const [heading,setHeading]=useState("Hello");
    const[isMouseOver,setMouseOver]=useState(false);
    function handleClick(){
        let name=document.getElementById("name").value;
        console.log(name);
        setHeading(name);
    }
    function changeColor(){
        // backgroundColor:"yellow"
        console.log("Mouse over")
        setMouseOver(true);
    }
  return (
    <div className="cont">
         <h1>{heading}</h1>
         <input id="name" className="box" type="text" placeholder="What's your name ?" />
         <button  onClick={handleClick} 
         style={{backgroundColor:isMouseOver?"white":"yellow"}}
         className="box">Submit</button>
    </div>
  )
}

export default EventHandling