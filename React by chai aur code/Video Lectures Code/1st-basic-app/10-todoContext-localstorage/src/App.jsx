import './App.css'
import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components';

function App() {
  // this state contain all the todos not the one todo
const [todos, setTodos]=useState([]);


// 1) addTodo functionality
// and this below todo argument is contain only to and above todos state and below todo argument is not same
const addTodo=(todo)=>{

  // setTodos(todo) if we do this then it will delete all todo in the array and then add this todo but we dont want this so will take the prev state first and add the current state into the previous state
  // so for that will write below code


  // here ..prev means we are spreading ond array values and adding new array or todo in them
// {id:Date.now(), ...todo} this means we are extracting {  id:1, todo:"Todo msg", completed:false }  this values 


  setTodos((prev)=> [{id:Date.now(), ...todo}, ...prev])

}


// 2) updateTodo functionality
// if todo found then add the todo and not found then make previous todo i.e. prevTodo as it is
const updateTodo=(id, todo)=>{
  setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id===id ? todo : prevTodo)))
}

// above map expansion for better understanding
// prev.map((prevTodo)=>{
//   if(prevTodo.id===id){
//     todo
//   }
//   else{
//     prevTodo
//   }
// })



//3)  deleteTodo functionality
// map is not good syntax for deleting functionality thats why will used the filter and in filter array will contain all todos exept that delete id todo
const deletoTodo=(id)=>{
  setTodos((prev)=> prev.filter((todo)=> (todo.id!==id)))
  }

// 4) toggleComplete functionality
const toggleComplete=(id)=>{
  setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id===id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo)))

}


// Now localstorage we write one useEffect for displaying the todo from locastorage
useEffect(() => {
  // this will give values in string but we want in json so we do the next thing
  // localStorage.getItem("todos")
    const todos=JSON.parse(localStorage.getItem("todos"))

    // for checking todo exist and its not empty
    // Suppose localStorage empty => null
    // Without check:
    // app may crash.
    if(todos && todos.length>0){
   setTodos(todos);

    }
}, [])

// now useEffect for adding new todo to localstorage
useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])



  return (
  <TodoProvider value={{todos, addTodo, updateTodo, deletoTodo, toggleComplete}}>
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>

                          </div>

                        ))}
                    </div>
                </div>
            </div>
  </TodoProvider>
  )
}

export default App
