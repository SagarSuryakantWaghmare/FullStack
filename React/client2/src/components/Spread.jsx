import React from 'react'

function Spread() {
    const fruits=["apple","banana","mango"];
    const vitamines=["creals",...fruits,"orange"];
    console.log(vitamines);
  return (
    <div>Spread</div> 
  )
}

export default Spread