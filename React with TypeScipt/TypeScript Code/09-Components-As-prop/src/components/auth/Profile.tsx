export type ProfileProps={
  name:string
}

function Profile({name}:ProfileProps) {
  return (
    <div>
      Prvate Profile Components.
      Name is {name}
    </div>
  )
}

export default Profile
