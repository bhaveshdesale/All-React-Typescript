import type React from "react"

interface InputProps{
  text:string,
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=> void
  
}
function Input({text, onChange}:InputProps) {
  return (
    <input type="text"
    placeholder="Search here..."
    value={text}
    onChange={onChange} />
  )
}

export default Input
