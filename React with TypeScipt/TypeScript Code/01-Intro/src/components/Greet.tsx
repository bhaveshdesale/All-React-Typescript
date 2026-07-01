type GreetProps={
  name:string
  city:string
  isLoggedIn:boolean
}



function Greet({name, city, isLoggedIn}:GreetProps) {
  return (
    <div>
      {isLoggedIn ? <h2>Welocome {name} to {city}</h2> : `Welcome Guest`}
    </div>
  )
}

export default Greet
