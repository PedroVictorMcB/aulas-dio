
const pokeApi = {};

// att definidos por default
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        // exemplo de arrow function na ln 7. Mais utilizado no mercado.
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}