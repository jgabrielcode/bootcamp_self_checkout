const path = require('path')

//Basename apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Nome do diretorio
console.log(path.dirname(__filename))

//extensao do arquivo
console.log(path.extname(__filename))

//criar um objeto path : cria um objeto path com varias informacoes sobre o arquivo atual
//file name armazena nosso arquivo atual
console.log(path.parse(__filename))

//Junte varios caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"))

