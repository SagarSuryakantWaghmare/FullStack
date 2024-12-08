import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Sagar can do it");
});
app.get("/about",(req,res)=>{
    res.send(`<h1>This is about page</h1><h2>My name is Sagar Suryakant Waghmare</h2>`)
})
app.get("/contactUs",(req,res)=>{
    res.send(`<h1>Contact me:7219330989</h1>`);

})
app.get("/skills",(req,res)=>{
    res.send(`<h1> I have skills in the whole all rounded way i am fullstack developer</h1>`)
})

app.listen(3000, () => {
    console.log("Server is starting on port 3000");
});
