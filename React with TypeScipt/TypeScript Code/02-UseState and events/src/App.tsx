import Button from './Components/Button'
import Input from './Components/Input'
import Container from './Components/Container'
import LoggedIn from './Components/state/LoggedIn'
import User from './Components/state/User'
import './App.css'


function App() {
  return (
   <>
   <Button handleClick={(event, id)=> console.log("Button clicked " +event+ "with id " +id)}></Button>
   <Input value='' handleChange={(event)=> console.log(event)}></Input>
    <Container styles={{backgroundColor:"Black", color:"white", border:"thin solid red"}}></Container>
    <LoggedIn></LoggedIn>
    <User></User>

   </>
  )
}

export default App
