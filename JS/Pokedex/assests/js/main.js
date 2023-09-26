
function convertPokemonTypesToLI (pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLI (pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name"> ${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLI(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name} image">
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