var http = require('http');

http.createServer(function(req, res) {
    res.end("<h1>Hello World!</h1>");
}).listen(8081);

console.log("Servidor rodando!");