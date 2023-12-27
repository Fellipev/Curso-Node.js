const db = require('./db')

const User = db.sequelize.define('users', {
    nome : {
        type : db.Sequelize.STRING
    },
    email : {
        type : db.Sequelize.STRING
    },
    senha : {
        type : db.Sequelize.STRING
    },
    DataNascimento : {
        type : db.Sequelize.DATE
    }
})

// user.sync({force : true})

module.exports = User;