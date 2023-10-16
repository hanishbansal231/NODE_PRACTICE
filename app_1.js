const readline = require('readline'); // Require the readline module

const rl = readline.createInterface({ // Create an interface for user input
    input: process.stdin, // Set the input to the standard input (keyboard)
    output: process.stdout, // Set the output to the standard output (console)
});

/**
 * Use the question method
 * Takes two parameters:
 * 1. A string prompt for the user
 * 2. A callback function that will be called with the user's input
 */

rl.question('Please Enter Your Name: ', (name) => {
    console.log('You Entered:', name);
    rl.close(); // Close the interface
});

/**
 * Use the 'close' event listener to handle the interface closure
 * Takes two parameters:
 * 1. Event Name ('close' in this case)
 * 2. Callback function to execute when the event occurs
 */

rl.on('close', () => {
    console.log('Interface Closed...'); // Log a message when the interface is closed
    process.exit(0); // Indicates successful termination with an exit code of 0
});
