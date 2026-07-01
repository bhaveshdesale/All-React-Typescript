import React from 'react'
import type { Todo } from '../types/todo'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';
interface TodoItemProps{
  todo:Todo
}

function TodoItem({todo}:TodoItemProps) {
const dispatch=useDispatch();
  
const handleDelete=()=>{
  dispatch(removeTodo(todo.id))
}
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoItem
