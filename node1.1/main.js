// on console: npm i readline-sync
const port = 3000,
 http = require("http"),
 httpStatus = require("http-status-codes"),
 app = http.createServer((request, response) => {
 console.log("Received an incoming request!");
 response.writeHead(httpStatus.OK, {
"Content-Type": "text/html"
 });
 let responseMessage = "<h1>Hello, Universe!</h1>";
 response.write(responseMessage);
 response.end();
 console.log(`Sent a response : ${responseMessage}`);
 });
app.listen(port);
console.log(`The server has started and is listening on port number:
➥ ${port}`);

const readline = require('readline-sync');
let name = readline.question("Enter name: ");
let email = readline.question("Enter email: ");

// node1.2

if (typeof name !== undefined && typeof email !== undefined) {
    console.log('Insert name and email');
} else {
    console.log(`Hi ${name} your mail is ${email}`);
}

