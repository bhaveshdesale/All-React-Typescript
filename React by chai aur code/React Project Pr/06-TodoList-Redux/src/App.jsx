import './App.css'
import { AddTodo, Footer, Header, Todos,  } from './componenets'

function App() {

  return ( 
    <div className='main-container'>
  <Header/>
  <div className='main-div'>
 <AddTodo/>
  <Todos/>
  </div>
 
  <Footer/>
</div>
  )
}

export default App
