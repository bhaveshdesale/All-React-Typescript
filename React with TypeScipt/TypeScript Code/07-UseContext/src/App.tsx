import './App.css'
import { ThemeContextProvider } from './components/ThemeContext'
import Box from './components/Box'
import User from './components/context/User'
import { UserContextProvider } from './components/context/UserContext'


function App() {
      {/* <Box/> */}

  return (
 <>

  <ThemeContextProvider>
      <Box/>
  </ThemeContextProvider>
   <UserContextProvider>
    <User/>
   </UserContextProvider>
 </>
  )
}

export default App
