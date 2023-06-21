"use client";
import { useContext } from "react";
import { PokeApiContext } from "@/contexts/PokeProvider";
import "./header.sass";

function Header() {
  const { pokedexData }: any = useContext(PokeApiContext);

  function handleClick() {
    console.log(pokedexData);
  }

  return (
    <header className="poke-header">
      <img src="pokeball-icon-hd.png" onClick={handleClick} />
      <p className="header-text">Pokédex</p>
    </header>
  );
}

export default Header;
