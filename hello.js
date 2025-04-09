// hello.js
function sayHello() {
    console.log("Hello from GitHub Actions!");
}

// Export the function for testing
module.exports = sayHello;

if (require.main === module) {
    // This block ensures the server only runs when directly executed
    const http = require('http');
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from GitHub Actions!\n');
    });

    server.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}
