import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let userIsAuthorized = false;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for password check
function passwordCheck(req, res, next) {
    const password = req.body["password"]; // Corrected variable name
    if (password === "ilovess") {         // Corrected comparison
        userIsAuthorized = true;
    }
    next();
}

// Serve static files (like HTML)
app.use(express.static(__dirname + "/public"));

// Use password check middleware on the POST route
app.post("/submit", passwordCheck, (req, res) => {
    if (userIsAuthorized) {
        res.send("Access granted! Welcome.");
    } else {
        res.send("Access denied! Incorrect password.");
    }
});

// Serve the main HTML page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
