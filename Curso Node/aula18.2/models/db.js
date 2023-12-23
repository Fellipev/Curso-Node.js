const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', 'Admin', {
    host : 'localhost',
    dialect : 'mysql'
})

// sequelize.authenticate().then(() =>{
//     console.log("Conexao ok!");
// }).catch((erro) =>{
//     console.log("Erro: " + erro);
// })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}