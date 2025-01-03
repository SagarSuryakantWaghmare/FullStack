import React from 'react'
import './App.css'
const name="Shraddha";
const bestFreind="Sagar";
const randomNumber=Math.floor(Math.random()*10);
const fName="Shraddha";
const lName="Shingare";
const age=21;
const date=new Date().getFullYear();
const App = () => {
  return (
    <div>
     <h1 className='heading' contentEditable="true">My name is  {name}</h1> 
     <h1>My best Freind is {bestFreind}</h1>
     <h1 >My favourite number is {randomNumber>5? "Sagar is best":"Sagar can do it"}</h1>
     <h1>{`Hello my full Name is ${fName} ${lName} and age is ${age}`}</h1>
     <h1>Copyright by {fName} @ {date}</h1>

     <h2>My Favorite animes</h2>
     <div className='anime'>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersden.com%2Fanime-wallpapers%2F2480x3508%2F&psig=AOvVaw3363CZLoPfXkO0AWt1XBR0&ust=1735960530413000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKD3urTL2IoDFQAAAAAdAAAAABAJ" alt="" />
     </div>
    </div>
  )
}

export default App