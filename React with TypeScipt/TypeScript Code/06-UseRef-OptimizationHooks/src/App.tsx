
import { useCallback } from 'react'
import './App.css'
import ReactMomo from './components/optimizationHooks/ReactMomo'
import DomRef from './components/ref/DomRef'
function App() {

  const handleClick=useCallback(()=>{
    console.log("Clicked")
  },[])

  return (
  <>
  <h1>hii</h1>
  <DomRef/>
  <ReactMomo onClick={handleClick}/>
  </>
  )
}

export default App
