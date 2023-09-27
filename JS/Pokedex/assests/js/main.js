
// function convertPokemonTypesToLI (pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${type}</li>`)
// }

// ele retirou a função a cima pq? Perguntar pro Eduardo ou Rafael

function convertPokemonToLI (pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.numberOrder}</span>
            <span class="name"> ${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name} image">
            </div>
        </li>
        `
}

console.log(document.getElementById("pokemonList"));

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
    
    const newHTML = pokemons.map(convertPokemonToLI).join('');
    pokemonList.innerHTML = newHTML


    // const newList = pokemons.map((pokemon) => {
    //     return convertPokemonToLI(pokemon)
    // })






    // const newHTML = newList.join('');

    // pokemonList.innerHTML += pokemons.map(convertPokemonToLI).join('');


    // const listItems = [];
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLI(pokemon));

    // }

    // console.log(listItems);
})