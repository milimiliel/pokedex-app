"use client";
import "./card.sass";

//TODO: importo context aqui pra controlar o que acontece depois no onclick ou cuido disso no componente acima?

interface CardProps {
  sprite: string;
  name: string;
  types: Type[];
}

interface Type {
  type: {
    name: string;
  };
}

function Card({ sprite, name, types }: CardProps) {
  return (
    <div className="pokedex-card">
      <img className="pokedex-card-sprite" src={sprite} />
      <span className="pokedex-card-name">{name}</span>
      <span className="pokedex-card-types">{`${types[0].type.name}`}</span>
    </div>
  );
}

export default Card;
