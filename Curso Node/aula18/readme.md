Criando tabelas com o sequelize, parecido com a criação de entidades do JPA/Hibernate

const Usuario = sequelize.define(//nome da tabela// 'usuarios', {
    //cada campo
    Nome: {
        type: Sequelize.STRING
    },
    Email: {
        type: Sequelize.STRING
    }
})

Usuario.sync({force: true}) => para criar a tabela

insert com sequelize
    Usuario.create({
        nome: "Fellipe",
        sobrenome: "Reis",
        idade: 20,
        email: "fellipe@gmail.com"
    })


express-handlebars
    npm install --save express-handlebars