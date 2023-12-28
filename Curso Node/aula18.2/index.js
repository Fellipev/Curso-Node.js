const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post')
const User = require('./models/user')

app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
}

}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/cad', (req, res) =>{
    res.render('formulario')
})

app.get('/cadUser', (req, res) => {
    res.render('formUser')
})

app.get('/', (req, res) => {
    //Select *
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render('home', {posts: posts})
    })
})

app.get('/users', (req, res) => {

    User.findAll({order : [['id', 'ASC']]}).then((users) => {
        res.render('users', {users : users})
    })
})

app.post('/addPostagem', (req, res) => {
    //como pegar os campos enviados pelo form
        let titulo = req.body.titulo
        let conteudo = req.body.conteudo
        // res.send(`Titulo: ${titulo}<br>Conteudo: ${conteudo}`)

    //Criação do post para salvar no banco
    Post.create({
        titulo: titulo,
        conteudo: conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((error) => {
        res.send("Houve um erro: " + error)
    })
})

app.post('/addUser', (req, res) => {
    let nome = req.body.nome
    let email = req.body.email
    let senha = req.body.senha
    let dataNascimento = req.body.dataNascimento

    // res.send(`Conteudo recebido<br>${nome}<br>${email}<br>${senha}<br>${dataNascimento}`)
    User.create({
        nome : nome,
        email : email,
        senha : senha,
        DataNascimento : dataNascimento
    }).then(() => {
        res.redirect('/users')
    }).catch((error) => {
        res.send("Houve um erro: " + error)
    })
})

app.listen(8081, () => {
    console.log("Server is runing at http://localhost:8081");
})






