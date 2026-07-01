import  { useState } from 'react'
import { useAppDispatch } from '../hooks/reduxHooks';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
const [text, setText]=useState("");
const dispatch=useAppDispatch();

const handleAdd=()=>{
  if(!text.trim()) return
      dispatch(addTodo(text));
      setText("");
}


  return (
    <div>
      <input type="text" 
      placeholder='Enter the todo...'
      value={text}
      onChange={(e)=> setText(e.target.value)} />

      <button onClick={handleAdd}> Add</button>
    </div>
  )
}

export default AddTodo
