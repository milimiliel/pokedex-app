"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export const PokeApiContext = createContext({});

export const PokeProvider = ({ children }: Props) => {
  const [pokedexData, setPokedexData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokedexData(data.results));
    console.log(pokedexData);
  }, []);

  return (
    <PokeApiContext.Provider value={{ pokedexData }}>
      {children}
    </PokeApiContext.Provider>
  );
};
