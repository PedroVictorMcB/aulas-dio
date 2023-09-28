
const pokeApi = {};

function convertPokeApiDetailToPokemon (pokeDetail) {
    const pokemon = new Pokemon()  //aqui utilizamos a classe que criamos em pokemon-model.js
    pokemon.numberOrder = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    
    // pokemon.type = pokemon.types.get(0); PQ ISSO NÃO FUNCIONOU? SE ELE DISSE QUE SERIA A MESMA COISA QUE USAR O DESTRUCTING
    
    // alternativa com destructing

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

// a função acima filtra os detalhes gerais recebido pela pokeapi em formato json, para usarmos apenas o essencial 

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

// att definidos por default
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        // exemplo de arrow function na ln 7. Mais utilizado no mercado.
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}