type PersonList={
names:{
  first:string,
  last:string

  }[]
}
function PersonList({names}:PersonList) {
  return (
    <div>
      {names.map((name)=> (
        <div>My Name is {name.first} {name.last}</div>
      ))}
    </div>
  )
}

export default PersonList
