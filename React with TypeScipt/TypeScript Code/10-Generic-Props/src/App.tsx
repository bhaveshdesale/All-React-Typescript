import './App.css'
import {List} from './components/generics/List'
function App() {

  return (
 <>
 <div>
   <List items={['toby', 'Andrew', 'Tom']} onClick={(item)=>console.log(item) } renderItem={(item)=> item}/>
    <List items={[1,2,3,4,4]} onClick={(item)=> console.log(item)} renderItem={(item)=> item}/>
    <List items={[{
      first:"Bhavesh",
      last:"Desale"
    },{
      first:"kalpesh",
      last:"Desale"
    }
    ]} onClick={(item)=> console.log(item)} renderItem={(item)=> item.first}/>

 </div>
 </>
  )
}

export default App
