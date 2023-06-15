"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export const PokeApiContext = createContext({});

export const PokeProvider = ({ children }: Props) => {
  const [pokedexData, setPokedexData] = useState<Object[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const fetchedPokeArray = [];
    for (let i = 1; i <= 20; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const data = await response.json();
      fetchedPokeArray.push(data);
    }
    setPokedexData([...fetchedPokeArray]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PokeApiContext.Provider value={{ pokedexData, isLoading }}>
      {children}
    </PokeApiContext.Provider>
  );
};
