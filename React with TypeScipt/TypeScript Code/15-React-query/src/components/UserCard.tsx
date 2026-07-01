import type { User } from '../types/user'
interface UserCardProps{
   user:User
}

function UserCard({user}:UserCardProps) {
  return (
    <div>
      
   <img
    src={
     user.picture.large
    }
    alt="user"
   />

   <h2>

    {user.name.first}

    {" "}

    {user.name.last}

   </h2>

   <p>
    {user.email}
   </p>

   <p>
    {user.phone}
   </p>

   <p>
    {user.location.country}
   </p>

    </div>
  )
}

export default UserCard
