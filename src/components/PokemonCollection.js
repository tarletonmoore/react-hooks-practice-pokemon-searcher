import React, { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ allPokemon, setAllPokemon, searchedPokemon }) {

  // useEffect(() => {
  //   fetch("http://localhost:3001/pokemon")
  //     .then((response) => response.json())
  //     .then((data) => setAllPokemon(data))
  // }, [])

  const cardComponent = searchedPokemon.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} allPokemon={allPokemon} setAllPokemon={setAllPokemon} />)

  console.log(searchedPokemon)
  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>

      <Card.Group itemsPerRow={6}>
        {cardComponent}
      </Card.Group>
    </div>
  );
}

export default PokemonCollection;
