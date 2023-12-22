const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const sequelize = new Sequelize('teste', 'root', 'Admin', {
    host: 'localhost',
    dialect: 'mysql'
});

// sequelize.authenticate().then(() =>{
//     console.log("Conexao ok!");
// }).catch((erro) =>{
//     console.log("Erro: " + erro);
// })

app.get('/cad', (req, res) =>{
    res.render('formulario')
})

app.post('/addPostagem', (req, res) => {
    res.send("Form recebido!")
})

app.listen(8081, () => {
    console.log("Server is runing at http://localhost:8081");
})






