
import { useState } from 'react'
import './App.css'
import ProfileCard from './componnets/ProfileCard'
import SearchBar from './componnets/SearchBar'
import SearchButton from './componnets/SearchButton'
import { usePokemon } from './hooks/usePokemon'

function App() {
  const [input, setInput]=useState<string>("");
  const [search, setSearch]=useState<string>("");

  const {pokemon, loading, error}=usePokemon(search)

  const handleSearch=()=>{
    setSearch(input);
    console.log("hii")

  }

  return (
   <>
   <h1>Search About Pokemon</h1>
   <SearchBar 
   value={input}
   onChange={(e)=> setInput(e.target.value)}
   />

   <SearchButton
   onClick={handleSearch}
   />
   
    {loading && (
      <div>Loading...</div>
    )}
  
    {error && (
      <div>Error...</div>
    )}

   <ProfileCard pokemon={pokemon}/>
   </>
  )
}

export default App
