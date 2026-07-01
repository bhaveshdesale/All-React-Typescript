import type { Note } from '../type/note'
import { useNote } from '../context/NoteContext'

interface NoteItemProps{
  note:Note
}



function NoteItem({note}:NoteItemProps) {
 const {deleteNote}= useNote();


  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
    <button onClick={()=> deleteNote(note.id)}>Delete</button>
      
    </div>
  )
}

export default NoteItem
