import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
 let [counter, setCounter]=useState(0);

const addValue=()=>{
  setCounter(counter++);
}
const removeValue=()=>{
  return counter>=0 ? setCounter(counter--):"value cannot be zero"
}
  return (
    <>
      <h1>Chai aur React</h1>
       <h2>Add Value:{counter}</h2>
       <button onClick={addValue}>Add Value</button>
        <br/>
        <button 
        onClick={removeValue}
        >Remove Value</button>


      
    </>
  )
}

export default App

