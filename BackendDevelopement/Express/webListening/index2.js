import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Define __dirname correctly for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "public", "index.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
    console.log(req.body); // Log form data
    res.send("Form submitted successfully!");
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
