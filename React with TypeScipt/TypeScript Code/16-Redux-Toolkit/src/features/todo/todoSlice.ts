import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {type Todo } from "../../types/todo";

interface TodoState{
  todos:Todo[]
}

const initialState :TodoState={
  todos:[]
}

export const todoSlice=createSlice({
  name:"Todo",
  initialState,
  reducers:{
    addTodo:(state, actions:PayloadAction<string>)=>{
      state.todos.push({
        id:Date.now(),
        text:actions.payload,

      })

    },
    removeTodo:(state, action:PayloadAction<number>)=>{
      state.todos=state.todos.filter((todo)=> todo.id !==action.payload)

    }

  }


})

export const {addTodo, removeTodo}= todoSlice.actions; // we export here because it will used by the components
export default todoSlice.reducer; // we export this because this can be used by the store


//add todo
// {
//  todos:[
//   {
//    id:123,
//    text:"Learn Redux"
//   }
//  ]
// }