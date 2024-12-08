
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('login'));

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Simple validation (for demonstration purposes only)
    if (email === 'user@example.com' && password === 'password123') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});