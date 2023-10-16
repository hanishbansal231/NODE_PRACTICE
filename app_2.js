const readline = require('readline'); // Import the readline module for user input
const fs = require('fs'); // Import the file system module for file operations

// Read the content of 'test.txt' synchronously and store it in 'textRead'
const textRead = fs.readFileSync('./Files/test.txt', 'utf-8');

// Log the content of 'test.txt' to the console
console.log(textRead);

// Create a string 'content' with the content from 'test.txt' and the current date
let content = `Data read from test.txt: ${textRead}. \n Date Created ${new Date()}`;

// Write the 'content' to a new file 'output.txt'
fs.writeFileSync('./Files/output.txt', content);
