const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//Conexao com o banco de dados
const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'Admin', {
    host: 'localhost',
    dialect: 'mysql'
})
//Fim conexao

//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

app.listen(8081, function(){
    console.log("Servidor Rodando da URL http://localhost:8081");
})