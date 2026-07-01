export interface Blog{
  userId:number,
  id:number,
  title:string,
  body:string
}

export interface CreateBlogPayload{
  title:string,
  body:string,
  userId:string
}