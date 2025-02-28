//variable qui récupère tous les pokémons
let allPokemons;
    
  //on crée une constante qui contient notre chemein relatif
  let jsonPath = "./pokedex.json";  //chemin relatif
  //console.log(jsonPath);


fetch(jsonPath)
  .then(function(response){
  if(!response.ok){
    throw new Error(`Erreur HTTP : ${response.status}`);
  }
  return response.json(); //Parse la réponse en json = converti la reponse en fichier json
})
.then(function(data){
  allPokemons = data.pokemon;
  displayPoke(allPokemons);
  //console.log(allPokemons)
  return (allPokemons);
})

.catch(function(error){
  console.error("Erreur lors du chargement du fichier JSON : ", error);
});


//fonction qui permet de trier les pokemeons par poids (odre croissant)
function sortPokemonsByWeight(pokemons) {
  return pokemons.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
}


//fonction qui affiche les pokemeons de plis de 10 kg
function displayPoke(dataFetch){
  if (dataFetch === undefined){
    console.error("Attention le paramètre dataFetch de la fonction displayPoke ne doit pas être undefined");
    return;
  }

  //on filtre les pokemons de plus de 10 kg et on stock le résultat dans une constante 
  const moreThanTenKg = dataFetch.filter((pokemon)=>parseFloat(pokemon.weight)>10);

  // on trie les pokémons du plus léger au plus lourd et on les stock dans une constante 
  const pokemonsPoidsCroissant = sortPokemonsByWeight(moreThanTenKg);

  pokemonsPoidsCroissant.forEach(function(pokemon) {
    //permet d'afficher les nom et les poids des pokemons dont le poids est suppérieur à10kg dans la console
      console.log(`Nom :${pokemon.name}, Poids :${pokemon.weight}`);
    
  });

  

} 

//console.log(allPokemons);