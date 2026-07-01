// type Roles="admin" |"user"

type ProfileData={
  profileData:{
  name:string,
  age:number,
  email:string,
  role:string
  address?:string
  }[]
}



function ProfileCardMiniProject({profileData}:ProfileData) {
  return (
    <div>
    {profileData.map((profileData, index)=>(

     <div key={index}>
      <h2>{profileData.name}</h2>
      <h2>{profileData.age}</h2>
      <h2>{profileData.email}</h2>
      <h2>{profileData.role}</h2>
      <h2>{profileData.address ? profileData.address : "India"}</h2>
     </div>
      

    ))}
    </div>
  )
}

export default ProfileCardMiniProject
