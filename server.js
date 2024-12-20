const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Example Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// API Route for handling form submissions
app.post('/submit-query', (req, res) => {
    const { name, email, message } = req.body;

    // Log or save the query (use a database in production)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ success: true, message: 'Query received!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
