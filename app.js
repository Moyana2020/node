const {sum} = require('./helper');
const http = require('http');

const server = http.createServer((req,res) => {
res.end("Moyana doing node.js");
} );

server.listen(3000);


var summ = sum(1,2);

console.log(summ);