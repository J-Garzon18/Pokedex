const pokemonList= document.getElementById("pokemonList");
    
async function fetchPokemonData(pokemonId){
    try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`) // Esto ${} es lo mismo que hacer "https://pokeapi.co/api/v2/pokemon/ditto" + pokemonId
  //hace la concatenación de variables.
  // las comillas inversas son utilizadas para strings o funciones especiales. 
    const data = await response.json()
    console.log(data)
    return data
} catch(error){
    console.error(error)
    return false
}
}


function displayPokemon(pokemon){
    const pokemonCard=document.createElement("div")
    pokemonCard.classList.add("pokemon-card")
    console.log(pokemon.sprites.front_shiny)
    console.log(pokemon)
    pokemonCard.innerHTML=`
        <img src="${pokemon.sprites.front_shiny}" alt="imagen de ${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <h4>ID: ${pokemon.id}<h4>
            `
    pokemonList.appendChild(pokemonCard)

}

async function loadPokedex(){
    const pokemon= await fetchPokemonData(4)
    displayPokemon(pokemon)
    console.log(pokemon)
}


loadPokedex()
