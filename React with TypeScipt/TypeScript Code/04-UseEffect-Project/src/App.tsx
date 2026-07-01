import { useState } from "react";
import SearchBar from "./components/SerachBar";
import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";

import { useGithubProfile }
from "./hooks/useGithubProfile";

function App() {
  const [input, setInput] = useState<string>("");

  const [searchUser, setSearchUser] =useState<string>("");

  const { profile, loading, error,} = useGithubProfile(searchUser);

  const handleSearch = () => { setSearchUser(input);};

  return (
    <>
      <h1>
        GitHub Profile Finder
      </h1>

      <SearchBar
        value={input}
        onChange={(e) => setInput(e.target.value)
        }
      />
     

      <Button
        onClick={handleSearch}
      />

      {loading && (
        <h2>Loading...</h2>
      )}

      {error && (
        <h2>{error}</h2>
      )}

      <ProfileCard
        profile={profile}
      />
    </>
  );
}

export default App;