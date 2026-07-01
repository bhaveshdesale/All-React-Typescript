type Data={
  name:string,
  age?:number
}
function OptionalType({name, age}:Data) {

  return (
    <div>
      {name}
      {age ? age: "18  "}
    </div>
  )
}

export default OptionalType
