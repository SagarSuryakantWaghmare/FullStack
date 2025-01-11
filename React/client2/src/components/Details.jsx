import { useState } from "react";


function details() {
    const [contact,setContact]=useState({
        fName:"",
        lName:"",
        email:""
    });
    const handleChange=(e)=>{
      const{name,value} = e.target;
      setContact((prevState)=>({
        ...prevState,
        [name]:value
      }))
    }
  return (
   <>
   <div>
    <h1>Details</h1>
    <div style={{display:"flex",flexDirection:"column"}}>
    <h1>Hello {contact.fName} {contact.lName}</h1>
    <p>{contact.email}</p>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
    <input type="text" onChange={handleChange} name="fName" placeholder="First Name" />
    <input type="text" onChange={handleChange} name="lName" placeholder="Last Name" />
    <input type="text" onChange={handleChange} name="email" placeholder="Enter your email" />
    <button>Submit</button>
    </div>
   </div>
   </>
  )
}

export default details