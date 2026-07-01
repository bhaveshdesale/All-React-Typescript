type Children={
  children:React.ReactNode;
}
function ProfileCard({children}:Children) {
  return (
    <div>
      {children}
    </div>
  )
}

export default ProfileCard
