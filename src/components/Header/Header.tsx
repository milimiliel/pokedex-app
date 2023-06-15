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
    <header>
      <img src="pokeball-icon-hd.png" onClick={handleClick} />
      <h1 className="header-h1">Pokédex</h1>
    </header>
  );
}

export default Header;
