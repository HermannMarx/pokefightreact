import React from "react";
import PokemonList from "../../components/PokemonList";

export default function AllPokemon({ allPokemon }) {
  return <PokemonList allPokemon={allPokemon} />;
}
