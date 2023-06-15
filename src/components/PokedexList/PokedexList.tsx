"use client";
import "./PokedexList.sass";
import { PokeApiContext } from "@/contexts/PokeProvider";
import { useContext } from "react";
import Card from "../Card/Card";

import React from "react";

function PokedexList() {
  const { pokedexData, isLoading }: any = useContext(PokeApiContext);

  return (
    <main className="pokedex-list">
      {isLoading ? (
        <span>"Loading..."</span>
      ) : (
        <div className="pokedex-cards">
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
        </div>
      )}
    </main>
  );
}

export default PokedexList;
