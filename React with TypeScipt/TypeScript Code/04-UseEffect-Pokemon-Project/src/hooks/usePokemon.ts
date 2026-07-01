import { useEffect, useState } from "react"
import {type PokemonData } from "../types/pokemon"

export const usePokemon=(name:string)=>{
   const [pokemon, setPokemon]=useState<PokemonData| null>(null);
   const [loading, setLoding]=useState(false);
   const [error, setError]=useState("");

   useEffect(()=>{
    const fetchData=async()=>{

      try {
      setLoding(true);
      const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if(!response.ok) return
      const result=await response.json();
      setPokemon(result);      

      } catch (error) {
        setError("Something went wrong");
        
      }
      finally{
        setLoding(false);
      }
     
    }


    fetchData();
    
   }, [name])
   return {
    loading,
    error,
    pokemon
   }
}