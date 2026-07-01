import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor]=useState();

  return (
    <div className="w-full h-screen duration-200"
  style={{backgroundColor:color}}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shodow-lg bg-white px-3 py-3 rounded"> 
    <button className="outline-none px-4" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>
     Red</button>
      <button className="outline-none px-4" style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>
     brown</button> 
     <button className="outline-none px-4" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>
     black
     </button> <button className="outline-none px-4" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>
     green
     </button> <button className="outline-none px-4" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>
     blue
     </button> <button className="outline-none px-4" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>
     white
     </button> <button className="outline-none px-4" style={{backgroundColor:"magenta"}} onClick={()=>setColor("magenta")}>
     magenta
     </button>
    
    </div>

  
  </div>
    </div>
  )
}

export default App
