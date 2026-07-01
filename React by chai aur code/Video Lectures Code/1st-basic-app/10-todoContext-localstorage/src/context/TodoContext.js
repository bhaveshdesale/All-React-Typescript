import { createContext, useContext } from "react";
export const TodoContext=createContext({
  todos:[
    {
      id:1,
      todo:"Todo msg",
      completed:false
    }
  ],
  addTodo:(todo)=> {},
  updateTodo:(id, todo)=>{},
  deletoTodo:(id)=>{},
  toggleComplete:(id)=>{}


})


// we have created custom hook useTodo that is return the useContext hook with TodoContext passed in it
// so we just have to export it and used in another file 

export const useTodo=()=>{
  return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider