Aula sobre reuisições HTTP
Metodo tradicional de se fazer as requisicoes criando um servidor web.

http = require('http')

http.createServer() => para criar o servidor.
http.createServer().listen(8081) => para definir a porta do localhost.
http.createServer(function(req, res) { res.end("oi") }).listen(8081) => para poder pegar requisicao e resposta e executar algo na tela.