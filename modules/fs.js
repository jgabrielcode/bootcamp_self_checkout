const fs = require('fs');
const path =  require('path');

//Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (err) => {
    if(err){
        return console.log("Error:",err)
    }
    console.log("Pasta criada com sucesso")
});


//Criar um arquivo

fs.writeFile(
    path.join(__dirname, '/test', 'test.txt'), "Hello node!", (err) => {
    if(err){
        return console.log("Erro:", err)
    }
    console.log("Arquivo criado com sucesso")

//Modifica arquivo
    fs.appendFile(
    path.join(__dirname, '/test', 'test.txt'), "Hello world!", (err) => {
    if(err){
        return("Erro:", err)
    }

    console.log("Arquivo modificado com sucesso")
});

//Ler um arquivo
fs.readFile(
    path.join(__dirname,"/test", 'test.txt'), 'utf8', (err,data) =>{
    if(err){
        return console.log("Erro:",err)
    }
    console.log(data)
});

})




