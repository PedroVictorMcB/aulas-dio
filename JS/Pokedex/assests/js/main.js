
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

pokeApi.getPokemons().then((pokemons = []) => {
    
    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLI(pokemon)
    })

    const newHTML = newList.join('');

    pokemonList.innerHTML += pokemons.map(convertPokemonToLI).join('');


    // const listItems = [];
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLI(pokemon));

    // }

    // console.log(listItems);
})