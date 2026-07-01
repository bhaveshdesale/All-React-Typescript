import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GithubCard from './components/GithubCard'
import InputField from './components/InputField'
import useGithubData from './hooks/useGihtubData'
import LoadingState from './components/LoadingState'



function App() {
const [input, setInput]=useState("");
const [search, setSearch]=useState("");
const {data, loading, error}=useGithubData(search);

function onBtnClick(){
setSearch(input);
}


  return (
    <div className='main-container'>
      <Header/>
       <main className='main'>
        <InputField
        label={"Username"}
        data={input}
        onCityChange={(input)=> setInput(input)}
        onButtonChange={onBtnClick}
   
        
        />

             {loading && <LoadingState />}
             {error && <p>{error}</p>}
        {data?.login   && (<GithubCard
        img={data.avatar_url}
    username={data.login}
    name={data.name}
    bio={data.bio}
    publicRepo={data.public_repos}
    following={data.following}
    followers={data.followers}
    blog={data.blog}
        
        
        />)}
      
      
       </main>
    
     <Footer/>
    </div>
  )
}

export default App
