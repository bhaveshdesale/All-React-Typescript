import {type PokemonData } from "../types/pokemon"

interface ProfileCardProps{
  pokemon:PokemonData
}

function ProfileCard({pokemon}:ProfileCardProps) {
  return (
    <div>
      <h2>Name {pokemon.forms[0].name}</h2>
      <h2>Height {pokemon.height}</h2>
      <h2>Weight {pokemon.weight}</h2>
    </div>
  )
}

export default ProfileCard
