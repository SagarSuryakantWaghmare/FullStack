import { useState } from "react";
import {  useEffect } from "react";
const Greet = () => {
    const [greet, setGreet] = useState("Hello Guys");
    const date = new Date();
    const currentTime = date.getHours();

    useEffect(() => {
        if (currentTime < 12) {
            setGreet("Good Morning");
        } else if (currentTime < 18) {
            setGreet("Good Afternoon");
        } else {
            setGreet("Good Night");
        }
    }, [currentTime]);

  return (
    <>
    <h2>{greet}</h2>
    <h2>Current Date and Time is {date}</h2>
    <h2>{{greet}}</h2>

    </>
  )
}

export default Greet