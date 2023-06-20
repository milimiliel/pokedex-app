"use client";
import "./PokedexInfo.sass";
import { useContext, useEffect, useState } from "react";
import { PokeApiContext } from "@/contexts/PokeProvider";

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

function PokedexInfo() {
  const { selectedPokemon }: any = useContext(PokeApiContext);

  const [speciesInfo, setSpeciesInfo] = useState();

  useEffect(() => {
    fetch(selectedPokemon?.species?.url)
      .then((response) => response.json())
      .then((data) => setSpeciesInfo(data));
    console.log(selectedPokemon);
  }, [selectedPokemon]);

  const genus = speciesInfo?.genera.find(
    (item: any) => item.language.name === "en"
  )?.genus;

  const flavorText = speciesInfo?.flavor_text_entries?.find(
    (item: any) => item.language.name === "en" && item.version.name === "shield"
  );

  const defaultFlavorText = speciesInfo?.flavor_text_entries
    ?.find((item: any) => item.language.name === "en")
    ?.flavor_text.replace(/[\n\f]/g, " ");

  const typeOne = selectedPokemon?.types[0]?.type?.name;
  const typeTwo = selectedPokemon?.types[1]?.type?.name || "";

  const typeOneColor = typeColors[typeOne] || "#000000";
  const typeTwoColor = typeColors[typeTwo] || "#000000";

  return (
    <div className="pokedex-info">
      {selectedPokemon && (
        <>
          <img
            src={
              selectedPokemon?.sprites?.other?.["official-artwork"]
                ?.front_default || ""
            }
            className="official-artwork"
          />
          <div className="basic-info-table">
            <p className="info-category">{genus}</p>
            <div className="col-2">
              <p className="info-category">Type</p>
              <p className="types">
                <span style={{ color: typeOneColor }}>
                  {typeOne.toUpperCase()}
                </span>{" "}
                <span style={{ color: typeTwoColor }}>
                  {typeTwo.toUpperCase()}
                </span>
              </p>
            </div>
            <div className="col-2">
              <p className="info-category">Height</p>
              <p>{selectedPokemon?.height}</p>
            </div>
            <div className="col-2">
              <p className="info-category">Weight</p>
              <p>{selectedPokemon?.weight}</p>
            </div>
            <p className="flavor-text">
              {flavorText?.flavor_text || defaultFlavorText}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default PokedexInfo;
