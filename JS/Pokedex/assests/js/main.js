
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLI (pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name"> ${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name} image">
        </div>
    </li>
    `
}

console.log(document.getElementById("pokemonList"));

const pokemonList = document.getElementById("pokemonList");

fetch(url)
    .then((response) => response.json())
    // exemplo de arrow function na ln 7. Mais utilizado no mercado.
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLI(pokemon);

        }
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

// const x = 10 + 10;
// console.log(x);