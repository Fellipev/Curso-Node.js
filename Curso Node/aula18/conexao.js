const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'Admin', {
    host: 'localhost',
    dialect: 'mysql'
});

const handlebars = require('express-handlebars')
//config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    app.lsten()

// sequelize.authenticate().then(function(){
//     console.log("Conexao ok!");
// }).catch(function(erro){
//     console.log("Erro com a conexao: " + erro);
// })

// const Postagem = sequelize.define('postagens', {
//     titulo: {
//         type: Sequelize.STRING
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// const Usuario = sequelize.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.STRING
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// })

// Usuario.create({
//     nome: "Fellipe",
//     sobrenome: "Reis",
//     idade: 20,
//     email: "fellipe@gmail.com"
// })