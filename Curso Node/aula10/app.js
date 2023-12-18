const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Pagina inicial");
});

app.get("/index", function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.listen(8081);