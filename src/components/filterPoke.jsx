function filterPokemon(
  allPokemons,
  pokeName = "",
  pokemonType = "",
  weakness = ""
) {
  let filteredPoke = [];

  if (allPokemons) {
    filteredPoke = allPokemons;
  }
  if (pokeName) {
    filteredPoke = filteredPoke.filter((name) => {
      return name.name.includes(pokeName);
    });
  }

  if (pokemonType) {
    filteredPoke = filteredPoke.filter((pokeType) => {
      return pokeType.type.includes(pokemonType);
    });
  }

  if (weakness) {
    filteredPoke = filteredPoke.filter((weak) => {
      return weak.weaknesses.includes(weakness);
    });
  }
  return filteredPoke;
}

function allPokeTypes(allPokemons) {
  let allTypes = [];
  allPokemons.map((pokemon) => {
    pokemon.type.map((element) => {
      if (!allTypes.includes(element)) {
        allTypes.push(element);
      }
    });
  });
  return allTypes;
}

export { filterPokemon, allPokeTypes };
