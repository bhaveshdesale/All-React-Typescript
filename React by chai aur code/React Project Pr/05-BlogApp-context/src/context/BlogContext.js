import { createContext, useContext } from "react";


export const BlogContext=createContext(
  {
    blogs:[
      {
        id:1,
        title:"React cohort",
        content:"hii this is react series",
        image:"image_url",
        createdAt:"Date"
      }
    ],
    addBlog:(blogs)=> {},
    updateBlog:(blogs, id)=>{},
    deleteBlog:(id)=>{}
  }
)


export function useBlog(){
return useContext(BlogContext);
}

export const BlogContextProvider=BlogContext.Provider;
