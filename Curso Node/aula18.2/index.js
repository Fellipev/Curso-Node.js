const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/cad', (req, res) =>{
    res.render('formulario')
})

app.post('/addPostagem', (req, res) => {
    //como pegar os campos enviados pelo form
    let titulo = req.body.titulo
    let conteudo = req.body.conteudo
    
    res.send(`Titulo: ${titulo}<br>Conteudo: ${conteudo}`)
})

app.listen(8081, () => {
    console.log("Server is runing at http://localhost:8081");
})






