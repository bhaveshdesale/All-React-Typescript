
import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import { getRandomUser } from './services/userServices'
import { type User } from './types/user'

function App() {
  const [user,setUser]=useState<User | null>()
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState("");

  useEffect(()=>{
    const fetchUser=async()=>{
      try {
        const data=await getRandomUser();
        setUser(data.results[0])
      } catch{
         setError("failled to load user")
      }
      finally{
        setLoading(false);
      }

    }
    fetchUser();
  }, []);



  return (
  <>
    {loading && (
         <h1>loading...</h1>
    )}
    {error && (
      <h1>{error}</h1>
    )}
 
    {user && <UserCard user={user}/>}

  </>
  )
}

export default App
