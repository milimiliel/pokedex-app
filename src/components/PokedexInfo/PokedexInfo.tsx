"use client";
import "./PokedexInfo.sass";
import { useContext, useEffect, useState } from "react";
import { PokeApiContext } from "@/contexts/PokeProvider";

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
              <div className="types">
                <p className="pokedex-card-types">{`${typeOne} ${typeTwo}`}</p>
              </div>
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
