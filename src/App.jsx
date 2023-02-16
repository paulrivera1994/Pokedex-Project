import React, { useEffect, useState } from "react";
import PokeList from "./components/PokeList";
import { filterPokemon, allPokeTypes } from "./components/filterPoke";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [pokeType, setPokeType] = useState("");
  const [pokeWeak, setPokeWeak] = useState("");
  let pokeList = [];
  const pokeTypes = allPokeTypes(allPokemons);
  const filteredPoke = filterPokemon(allPokemons, pokeName, pokeType, pokeWeak);

  function getPokemons() {
    const fetchPokemon = fetch(
      `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
    );
    fetchPokemon
      .then((res) => res.json())
      .then((data) => {
        setAllPokemons(data.pokemon);
        // console.log(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getPokemons();
  }, []);
  console.log(pokeList);

  for (let val of Object.values(allPokemons)) {
    let pokeObj = val.name;

    pokeList.push(pokeObj);
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Paul's Pokedex</h1>
      </div>
      <div className="label-container">
        <label htmlFor="nameSelect">Choose by Pokemon: </label>
        <select
          id="nameSelect"
          onChange={(e) => {
            setPokeName(e.target.value);
          }}
        >
          <option value="">All</option>
          {pokeList.map((pokemon) => {
            return (
              <option key={pokemon.id} value={pokemon}>
                {pokemon}
              </option>
            );
          })}
        </select>
        <label htmlFor="typeSelect">Choose by Type: </label>
        <select
          id="typeSelect"
          onChange={(e) => {
            setPokeType(e.target.value);
          }}
        >
          <option value="">All</option>
          {pokeTypes.map((types) => {
            return (
              <option key={`${types.id} + ${types.pokeType}`} value={types}>
                {types}
              </option>
            );
          })}
        </select>
        <label htmlFor="weaknessSelect">Choose By Weakness: </label>
        <select
          id="weaknessSelect"
          onChange={(e) => {
            setPokeWeak(e.target.value);
          }}
        >
          <option value="">None</option>
          {pokeTypes.map((element, index) => {
            return (
              <option key={element + index} value={element}>
                {element}
              </option>
            );
          })}
        </select>
      </div>
      <div className="pokemon-container">
        <div className="all-container">
          {filteredPoke.length > 0
            ? filteredPoke.map((pokemon, index) => (
                <PokeList
                  key={index}
                  id={pokemon.id}
                  image={pokemon.img}
                  name={pokemon.name}
                  type={pokemon.type}
                  weaknesses={pokemon.weaknesses.slice(0, 5)}
                />
              ))
            : allPokemons.map((pokemon, index) => (
                <PokeList
                  key={index}
                  id={pokemon.id}
                  image={pokemon.img}
                  name={pokemon.name}
                  type={pokemon.type}
                  weaknesses={pokemon.weaknesses.slice(0, 5)}
                />
              ))}
        </div>
        <button className="load-more" onClick={() => getPokemons()}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default App;
