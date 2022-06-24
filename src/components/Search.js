import React from "react";
import PokemonCollection from "./PokemonCollection";

function Search({ allPokemon, setPokemonSearch, searchedPokemon }) {
  // const [pokemonSearch, setPokemonSearch] = useState("")

  // const searchedPokemon = allPokemon.filter((pokemon) => {
  //   pokemon
  //     .name
  //     .toLowerCase()
  //     .includes(pokemonSearch.toLowerCase())
  // })

  function handleSearch(event) {
    setPokemonSearch(event.target.value)
    console.log(event.target.value)

  }
  return (
    <div className="ui search" >
      <div className="ui icon input">
        <input className="prompt"
          onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );

}

export default Search;
