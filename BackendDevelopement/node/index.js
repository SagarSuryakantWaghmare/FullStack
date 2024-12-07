// const fs=require('fs');
// fs.writeFile("message.txt","Hello Shraddha",(err)=>{
//     if(err) throw err;
//     console.log("The file has been saved")
// })
// fs.readFile("./message.txt",'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// var generateName=require("sillyname");
// var sillyname=generateName();
// console.log(sillyname)

import heroname from "superheroes"
const name=heroname.random();
console.log(`I am ${name}`);