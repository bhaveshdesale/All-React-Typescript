
import './App.css'
import CustomButton from './components/html/Button'
import RandomNumber from './components/restriction/RandomNumber'
import Toast from './components/templateLiterals/Toast'
import Input from './components/html/Input'
import Test from './components/polymorphic/Test'
function App() {

  return (
  <>
  <h1>Hello</h1>
  <RandomNumber value={10} isPositive/>
  <Toast position='center-bottom'/>
  <CustomButton varient='primary' onClick={()=> console.log("Clicked")}>My Button</CustomButton>
  <Input/>
   <Test as='h1' size='lg'>Heading</Test>
   <Test as='h2' size='md'>Paragraph</Test>
   <Test as='label' htmlFor='someId' size='sm' color='secondary'>Label</Test>

  </>
  )
}

export default App
