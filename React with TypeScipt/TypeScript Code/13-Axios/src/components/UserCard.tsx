import { type User } from '../types/user'
interface UserCardProps{
  user:User

}

function UserCard({user}:UserCardProps) {
  return (
    <div>
      <img src={user.picture.large} />
      <h2>{user.name.first}</h2>
      <h2>{user.name.last}</h2>
      <h2>{user.phone}</h2>
    </div>
  )
}

export default UserCard
