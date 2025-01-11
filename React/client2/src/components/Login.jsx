import "./login.css";
import { useState } from "react";
function Login() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  const handleSubmit = (e) => {
    const newValue = e.target.value;
    const inputName = e.target.placeholder.includes("first") ? "fName" : "lName";
    setFullName((prevState) => ({
      ...prevState,
      [inputName]: newValue
    }));
  };
  return (
    <>
      <div className="main">
        <h1 className="heading">Login Page</h1>
        <div className="display">
          Hello {fullName.fName} {fullName.lName}
        </div>
        <input onChange={handleSubmit} value={fullName.fName} type="text" placeholder="Enter your first name" />
        <input onChange={handleSubmit} value={fullName.lName} type="text" placeholder="Enter your last name" />
        <button>Submit</button>
      </div>
    </>
  );
}

export default Login