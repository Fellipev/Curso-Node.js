instalação do Sequelize e driver do MySQL!

Sequelize
    npm install --save sequelize

MySQL
    npm install --save mysql2


criando conexão com o banco de dados com Sequelize!
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize("banco", "root", "", {host: "localhost", dialect: "mysql"}); => instancia do objeto de conexao.
    usando de parametro o nome do db, usuario, senha e um objeto json com host e dialect(MySQL, SQL SERVER, PostgreSQL)