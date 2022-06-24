import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([])

  const [pokemonSearch, setPokemonSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => setAllPokemon(data))
  }, [])

  const searchedPokemon = allPokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase())
  })
  console.log(searchedPokemon)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm allPokemon={allPokemon} setAllPokemon={setAllPokemon} />
      <br />
      <Search allPokemon={allPokemon}
        pokemonSearch={pokemonSearch}
        setPokemonSearch={setPokemonSearch}
        searchedPokemon={searchedPokemon}
      />
      <br />
      <PokemonCollection allPokemon={allPokemon} setAllPokemon={setAllPokemon} searchedPokemon={searchedPokemon} />
    </Container>
  );
}

export default PokemonPage;
