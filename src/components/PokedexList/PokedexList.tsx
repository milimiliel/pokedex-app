"use client";
import "./PokedexList.sass";
import { PokeApiContext } from "@/contexts/PokeProvider";
import { useContext } from "react";
import Card from "../Card/Card";
import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";

function PokedexList() {
  const { pokedexData, isLoading, nextPage, previousPage }: any =
    useContext(PokeApiContext);

  return (
    <main className="pokedex-list">
      {isLoading ? (
        <span>"Loading..."</span>
      ) : (
        <div className="pokedex-cards">
          {previousPage && <ArrowUp />}

          {pokedexData.map((pokemon: any) => {
            return (
              <Card
                key={pokemon.id}
                sprite={pokemon.sprites.front_default}
                name={pokemon.name}
                types={pokemon.types}
              />
            );
          })}
          {nextPage && <ArrowDown />}
        </div>
      )}
    </main>
  );
}

export default PokedexList;
