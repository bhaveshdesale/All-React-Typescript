import type React from "react"

interface InputProps{
  value:string,
  onChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
}


function SearchBar({value, onChange}:InputProps) {
  return (
   <input
    value={value}
    placeholder="Enter Your Favourite Pokemon"
    onChange={onChange}
   />
  )
}

export default SearchBar
