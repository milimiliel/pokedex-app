"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export const PokeApiContext = createContext({});

export const PokeProvider = ({ children }: Props) => {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
  );

  const [pokedexData, setPokedexData] = useState<Object[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  const [selectedPokemon, setSelectedPokemon] = useState({});

  const fetchPokemonListData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const fetchedUrls = await data.results.map((item: any) => item.url);
    const fetchedPokemon = await Promise.all(
      fetchedUrls.map((url: string) => {
        return fetch(url).then((response) => response.json());
      })
    );
    setNextPage(data.next);
    setPreviousPage(data.previous || "");
    setPokedexData([...fetchedPokemon]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemonListData();
  }, [url]);

  return (
    <PokeApiContext.Provider
      value={{
        pokedexData,
        isLoading,
        nextPage,
        previousPage,
        setUrl,
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      {children}
    </PokeApiContext.Provider>
  );
};
