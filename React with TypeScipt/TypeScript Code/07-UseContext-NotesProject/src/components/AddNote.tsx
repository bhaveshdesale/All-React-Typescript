import React, { useState } from 'react'
import { useNote } from '../context/NoteContext';

function AddNote() {
  const [title, setTitle]=useState<string>("");
  const [desc, setdesc]=useState<string>("");
   
 const {addNote}= useNote();
  const onSubmitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(title.trim() && desc.trim()){
      addNote(title, desc);
      setTitle("");
      setdesc("");
    }


    
  }
  return (
    <form onSubmit={onSubmitHandler} style={{display: 'grid', alignItems:'center', justifyContent:'center', gap:"1rem", padding:"1rem"}}>
      <input type="text" 
      value={title}
      placeholder='Enter the title'
      onChange={(e)=> setTitle(e.target.value)}/>

      <input type="text"
      value={desc}
      placeholder='Enter the description'
      onChange={(e)=> setdesc(e.target.value)}
      />
      <button type='submit'>Add Note</button>

    </form>
  )
}

export default AddNote
