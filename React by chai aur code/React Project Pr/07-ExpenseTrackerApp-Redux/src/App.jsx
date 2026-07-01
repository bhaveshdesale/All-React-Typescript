import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import AddButton from './componenets/AddButton'
import ExpenseForm from './componenets/ExpenseForm'
import ExpenseList from './componenets/ExpenseList'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='main-container'>
   <Header/>
   <div className='main-div'>
   <AddButton/>
       <ExpenseForm/>
       <ExpenseList/>
   </div>
   <Footer/>
  </div>
  )
}

export default App
