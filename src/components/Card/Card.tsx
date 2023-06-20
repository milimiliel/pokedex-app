"use client";
import "./card.sass";
import { useContext } from "react";
import { PokeApiContext } from "@/contexts/PokeProvider";

//TODO: importo context aqui pra controlar o que acontece depois no onclick ou cuido disso no componente acima?

function Card({ sprite, name, types, info }: CardProps) {
  const { setSelectedPokemon }: any = useContext(PokeApiContext);

  return (
    <div className="pokedex-card" onClick={() => setSelectedPokemon(info)}>
      <img className="pokedex-card-sprite" src={sprite} />
      <p className="pokedex-card-name">{`${name[0].toUpperCase()}${name.slice(
        1
      )}`}</p>
    </div>
  );
}

export default Card;

interface CardProps {
  sprite: string;
  name: string;
  types: Type[];
  info: object;
}

interface Type {
  type: {
    name: string;
  };
}
