interface DeveloperSearchjProps{
  value:string,
  onChange:(value:string)=> void
}

function DeveloperSearch({value, onChange}:DeveloperSearchjProps) {
  return (
    <div>
      <input type="text"
      value={value}
      onChange={(e)=> onChange(e.target.value)} 
      placeholder="Search"
      className="input" />
      
    </div>
  )
}

export default DeveloperSearch
