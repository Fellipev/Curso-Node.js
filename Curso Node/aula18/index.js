const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    app.set('views', './views');

//Conexao com o banco de dados
const sequelize = new Sequelize('teste', 'root', 'Admin', {
    host: 'localhost',
    dialect: 'mysql'
});


//Criando uma Rota
    app.get('/cad', (req, res) => {
        res.render('home');
    })

app.listen(8081, function(){
    console.log("Servidor Rodando da URL http://localhost:8081");
})