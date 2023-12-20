const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

const sequelize = new Sequelize('teste', 'root', 'Admin', {
    host: 'localhost',
    dialect: 'mysql'
});

// sequelize.authenticate().then(() =>{
//     console.log("Conexao ok!");
// }).catch((erro) =>{
//     console.log("Erro: " + erro);
// })

app.get('/cad/:nome', (req, res) =>{
    res.send(`Bem vindo ${req.params.nome}, a tela de cadastro`);
})

app.listen(8081, () => {
    console.log("Server is runing at http://localhost:8081");
})






