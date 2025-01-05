import { useState } from "react";



function UState() {
  const updateTime=()=>{
    const date=new Date().toLocaleTimeString();
  
    setTime(date);
  }
  setInterval(updateTime, 1000);
  const[Time,setTime]=useState("10:40");
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto",
          padding: "20px",
          maxWidth: "400px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Time is money</h1>
        <div style={{ textAlign: "center" }}>
          <button
           onClick={updateTime}
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Get time
          </button>
          <h1>{Time}</h1>
        </div>
      </div>
    </>
  );
}

export default UState;
