interface ButtonProps{
  onClick:()=> void
}

function SearchButton({onClick}:ButtonProps) {
  return (
    <button onClick={onClick}>Search</button>
  )
}

export default SearchButton
