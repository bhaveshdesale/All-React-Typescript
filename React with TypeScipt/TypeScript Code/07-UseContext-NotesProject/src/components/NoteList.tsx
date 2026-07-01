import { useNote } from '../context/NoteContext'
import NoteItem from './NoteItem';

function NoteList() {
 const {notes}= useNote();
  return (
    <div>
      {notes.map((note)=> (
        <NoteItem key={note.id} note={note} />
      ))}
      
    </div>
  )
}

export default NoteList
