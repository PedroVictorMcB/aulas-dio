
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then((response) => response.json())
    // exemplo de arrow function na ln 7
    .then(function(jsonBody) {
        console.log(jsonBody);
    })
    // then = caso tenha sucesso na resposta da requisição
    .catch(function(error) {
        console.log(error);
    })
    // catch = caso tenha algum erro na resposta da requisição
    
    // .finally(function() {
    //     console.log("Requisição Concluída!")
    // })
    
    // finally = responde independentemente se tem sucesso ou fracasso na resposta da requisição

    // Esta estrutura acima é um modelo de uma interface de comunicação de uma PROMISE. Esta estrutura se assemelha com a estrutura de tratamento de erro Try-Catch.
    // No try-catch o try equivale ao .then, o catch ao .catch e o finally ao .finally

const x = 10 + 10;
console.log(x);