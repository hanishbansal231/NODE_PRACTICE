const http = require('http'); // Import the HTTP module

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.end('Hello from the server!'); // Send a response to the client with the message
    console.log('A new request received'); // Log a message when a request is received
});

// Start the server and have it listen on port 8080 and the local host (127.0.0.1)
server.listen(8080, '127.0.0.1', () => {
    console.log("Server is Started!"); // Log a message when the server is started
});
