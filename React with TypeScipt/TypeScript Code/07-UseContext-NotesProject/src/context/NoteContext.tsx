import { createContext, useContext, useState } from "react";
import type { NotesContextType, Note } from "../type/note";

interface NoteContextProviderProps{
  children:React.ReactNode

}
const NoteContext=createContext<NotesContextType|null>(null)


export const NoteContextProvider=({children}:NoteContextProviderProps)=>{
   const [notes, setNotes]=useState<Note[]>([]);

   const addNote=(text:string, description:string)=>{
      const newNote: Note={
        id:Date.now(),
        title:text,
        description:description,
        createdAt:Date.now()  }

      setNotes((prev)=> [...prev, newNote])}

      const deleteNote=(id:number)=>{
       setNotes((prev)=> prev.filter((note)=> note.id!==id))
      }
  return(
    <NoteContext.Provider value={{notes, addNote, deleteNote}}>
     {children}
    </NoteContext.Provider>
  )
}

export const useNote = () => {
  const context =
    useContext(NoteContext);

  if (!context) {
    throw new Error(
      "useNote must be used inside NoteProvider"
    );
  }

  return context;
};