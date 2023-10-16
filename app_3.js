const fs = require('fs'); // Import the file system module for file operations

// Read the content of 'test.txt' asynchronously
fs.readFile('./Files/test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err); // Log an error message if there is an error
    } else {
        // Log the data read from 'test.txt' to the console
        console.log(data);
    }
});

// Log a message to indicate that file reading is in progress
console.log('Reading files...');
