import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ProfileCardMiniProject from "./components/ProfileCardMiniProject";
import {type User } from "../types/user";

function App() {
  const profileData: User[] = [
    {
      id: 1,
      name: "Bhavesh",
      age: 22,
      email: "abc@gmail.com",
      role: "admin",
      address: "America",
    },
    {
      id: 2,
      name: "Saurabh",
      age: 21,
      email: "bca@gmail.com",
      role: "user",
    },
  ];

  return (
    <>
      <ProfileCardMiniProject
        profileData={profileData}
      />

      <ProfileCard>
        <ProfileCardMiniProject
          profileData={profileData}
        />
      </ProfileCard>
    </>
  );
}

export default App;