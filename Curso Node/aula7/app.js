const express = require("express");
const app = express();

console.log("Server is running! http://localhost:8081");

app.get('/', function(req, res) {
    res.send('Hello World!')
});

app.get('/sobre', function(req, res) {
    res.send('Pagina sobre!')
});

app.get('/ola/:nome', function(req, res) {
    res.send(`Ola ${req.params.nome}!`)
});

app.listen(8081);