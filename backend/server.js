require('dotenv').config();

const express = require('express');
const http = require('http');
const cors=require('cors');

const app = express();
const PORT = process.env.PORT;

const allowedOrigins = [
    "https://phoenix-cipher.great-site.net",
    "https://sensegate-frontend.onrender.com"
];
// Variable to store the data in memory
let storedData = null;
// Define an array of allowed origins

// Middleware to parse JSON bodies
app.use(express.json());

// Configure CORS to handle multiple origins
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., mobile apps or Postman)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

// Handle POST requests
app.post('/', (req, res) => {
    const inputData = req.body;

    if (inputData && typeof inputData === 'object') {
        // Replace the in-memory data
        storedData = inputData;
        res.json({ status: 'success', message: 'Data replaced successfully' });
    } else {
        res.status(400).json({ status: 'error', message: 'Invalid JSON or no data received' });
    }
});

// Handle GET requests
app.get('/', (req, res) => {
    // Return the stored data or an empty array if no data is stored
    res.json(storedData || []);
});

// Handle unsupported methods
app.all('/', (req, res) => {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
});

// Create an HTTP server and apply custom timeout settings
const server = http.createServer(app);

// Modify timeout values
server.keepAliveTimeout = 120000;  // Set keep-alive timeout to 120 seconds
server.headersTimeout = 120000;    // Set headers timeout to 120 seconds

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
