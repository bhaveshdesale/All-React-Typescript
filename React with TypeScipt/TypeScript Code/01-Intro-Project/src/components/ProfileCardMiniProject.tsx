import {type  User } from "../../types/user"

interface ProfileCardMiniProjectProps{
  profileData:User[]
}

function ProfileCardMiniProject({profileData}:ProfileCardMiniProjectProps) {
  return (
    <div>
      {profileData.map((profile)=>(
        <div key={profile.id}
         style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
          }}>
            <h3>{profile.name}</h3>
            <p>Age: {profile.age}</p>
            <p>Email: {profile.email}</p>
            <p>Role: {profile.role}</p>
            <p>
              Address: {profile.address ?? "India"}
            </p>
        </div>
      ))}
    </div>
  )
}

export default ProfileCardMiniProject
