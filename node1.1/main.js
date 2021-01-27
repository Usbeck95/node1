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

function User(userid, name, email) {
    this.userid = userid;
    this.name = name;
    this.email = email;
}

let name = readline.question("Enter name: ");
let email = readline.question("Enter email: ");

// node1.2

if (typeof name !== undefined && typeof email !== undefined) {
    console.log('Insert name and email');
} else {
    console.log(`Hi ${name} your mail is ${email}`);
}

let userid = readline.question("Enter a userid:");

if (typeof userid === typeof userid) {
    console.log("That userid is already taken, plz insert new");
} else {
    console.log('')
}
