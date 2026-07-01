export interface Note{
  id:number,
  title:string,
  description:string,
  createdAt:number
}

export interface NotesContextType{
  notes:Note[],

  addNote:(title:string, description:string)=> void

  deleteNote:(id:number)=> void
}