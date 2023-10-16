const fs = require('fs'); // Import the file system module for file operations

// Read the content of 'test.txt' asynchronously
fs.readFile('./Files/test.txt', 'utf-8', (err1, data1) => {
    if (err1) {
        console.error('Error reading test.txt:', err1); // Log an error message if there is an error
    } else {
        // Log the data read from 'test.txt' to the console
        console.log(data1);

        // Construct a file path based on the content of 'test.txt'
        const filePath = `./Files/${data1}.txt`;

        // Read the content of the file constructed from the data
        fs.readFile(filePath, 'utf-8', (err2, data2) => {
            if (err2) {
                console.error(`Error reading ${filePath}:`, err2); // Log an error message if there is an error
            } else {
                // Log the data read from the second file to the console
                console.log(data2);

                // Write the combined data to 'append.txt'
                fs.writeFile('./Files/append.txt', `${data1}\n${data2}\n Date Created ${new Date()}`, () => {
                    console.log('File Written successfully...'); // Log a success message when writing is complete
                });
            }
        });
    }
});

// Log a message to indicate that file reading
