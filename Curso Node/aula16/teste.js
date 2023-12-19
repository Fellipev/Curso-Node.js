const Sequelize = require("sequelize");

let banco = 'sistemadecadastro';
let user = 'root';
let password = 'Admin';

const sequelize = new Sequelize(banco, user, password, {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function (){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})