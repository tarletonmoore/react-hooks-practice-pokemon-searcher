import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [image, setImage] = useState(true)

  function handleClick() {
    setImage((image) => !image)

  }

  return (



    <Card>
      <div>
        <div className={pokemon.sprites} onClick={handleClick}>
          <img src={image ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />

        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
