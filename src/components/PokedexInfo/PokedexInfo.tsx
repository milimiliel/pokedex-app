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
  }, [selectedPokemon]);

  const genus = speciesInfo?.genera.find(
    (item: any) => item.language.name === "en"
  )?.genus;

  const flavorText = speciesInfo?.flavor_text_entries?.find(
    (item: any) => item.language.name === "en" && item.version.name === "shield"
  );

  return (
    <div>
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
            <p className="genus">{genus}</p>
            <div className="col-2">
              <p>Type</p>
              <div className="types">
                <p className="pokedex-card-types">{`${
                  selectedPokemon?.types[0].type.name
                } ${selectedPokemon?.types[1]?.type.name || ""}`}</p>
              </div>
            </div>
            <div className="col-2">
              <p>Height</p>
              <p>{selectedPokemon?.height}</p>
            </div>
            <div className="col-2">
              <p>Weight</p>
              <p>{selectedPokemon?.weight}</p>
            </div>
            <p className="flavor-text">{flavorText?.flavor_text}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default PokedexInfo;
