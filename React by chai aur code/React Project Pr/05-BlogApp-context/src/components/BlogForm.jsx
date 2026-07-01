import React, { useState } from 'react'
import { useBlog } from '../context';

function BlogForm() {
  const [title, setTitle]=useState("");
  const [content, setContent]=useState("");
  const [image, setImage]=useState("");

  const { addBlog}=useBlog();
  
const add=(e)=>{
  e.preventDefault();

  if(!title && !content && !image) return;
  addBlog({
    title:title,
    content:content,
    img:image
  })
  setTitle("");
  setContent("");
  setImage("");

}


  return (
    <form onSubmit={add}>
      <input type="text" 
      placeholder='Enter the title' 
      value={title}
      onChange={(e)=> setTitle(e.target.value)}

       />

       <input type="text"
       placeholder='Enter the content'
       value={content}
       onChange={(e)=> setContent(e.target.value)}
       />

       <input type="file" 
       placeholder='Enter the image'
       value={image}
       onChange={(e)=> setImage(e.target.value)}
       />

       <button
       type='sumbit'
       >
         Add Blog

       </button>

    </form>
  )
}

export default BlogForm
