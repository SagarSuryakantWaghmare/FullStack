import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Correctly define __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.send(`<h1>This is about page</h1><h2>My name is Sagar Suryakant Waghmare</h2>`);
});

app.get("/contactUs", (req, res) => {
    res.send(`<h1>Contact me: 7219330989</h1>`);
});

app.get("/skills", (req, res) => {
    res.send(`<h1>I have skills in the whole all-rounded way. I am a full-stack developer.</h1>`);
});

app.post("/register", (req, res) => {
    res.sendStatus(201); // HTTP 201 Created
});

app.put("/user/shraddha", (req, res) => {
    res.sendStatus(200); // HTTP 200 OK
});

app.patch("/user/shraddha", (req, res) => {
    res.sendStatus(200); // HTTP 200 OK
});

app.delete("/user/shraddha", (req, res) => {
    res.sendStatus(200); // HTTP 200 OK
});

app.post("/submit", (req, res) => {
    console.log(req.body); // Correctly log request body
    res.send("Form submitted successfully!");
});

// Start the server
app.listen(3000, () => {
    console.log("Server is starting on port 3000");
});
