type PersonProps={
  name:{
    firstName:string,
    age:number
    
  }
}
function Person({name}:PersonProps) {
  return (
    <div>
      <h2>{name.firstName}</h2>
      <div>{name.age}</div>
    </div>
  )
}

export default Person
