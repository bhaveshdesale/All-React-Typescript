import './App.css'
import UserCard from './components/UserCard';
import { useUser } from './hooks/useUser'

function App() {
 const {data, isLoading, isError, error} =useUser();
 if(isLoading){
  return (
    <h1>Loading..</h1>
  )
 }
 if(isError){
  return (
    <h1>{error.message}</h1>
  )
 }

  const user=data.results[0];
  return(
    <UserCard user={user}/>
  )
}

export default App
