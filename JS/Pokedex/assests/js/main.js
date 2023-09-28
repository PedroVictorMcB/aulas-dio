
const pokemonList = document.getElementById("pokemonList");
const loadMoreBTN = document.getElementById("loadMoreBTN");
const maxRecords = 151;
const limit = 10;
let offset = 0;

// function convertPokemonTypesToLI (pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${type}</li>`)
// }

// ele retirou a função a cima pq? Perguntar pro Eduardo ou Rafael

function loadPokemonItens (offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => `
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
            `).join('');
        pokemonList.innerHTML += newHTML
    })
}

loadPokemonItens(offset, limit)

loadMoreBTN.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit)

        loadMoreBTN.parentElement.removeChild(loadMoreBTN);
    } else {
        loadPokemonItens(offset, limit)
    }
})

// console.log(document.getElementById("pokemonList"));

