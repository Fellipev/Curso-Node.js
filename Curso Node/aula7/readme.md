Express é uma lib que facilita a criação de servidor e rotas.

armazeno a função express dentro de uma constante com require("express")
depois armazeno essa função dentro de outra função => app = express();

com app.get() passo parametros como a URL e uma função de callback para poder fazer as interações com requisição e resposta

app.get('/', function(req, res){
    res.send("hello world!")
})

para passar um parametro por url => ('/:nome')

finalizo a aplicação com app.listen(8081) para definir a porta do localhost... essa linha de codigo tem que ser a ultima do programa.