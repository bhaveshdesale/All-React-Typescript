import React, { useState } from 'react'
import { useBlog } from '../context';

function BlogCard({blog}) {
  const [edit, setEditable]=useState(false);
  const [blogTitle, setBlogTitle]=useState(blog.title);
  const [blogContent, setBlogContent]=useState(blog.content);
  const [blogImg, setBlogImg]=useState(blog.image);




  const {updateBlog, deleteBlog}=useBlog();


const editBlog=()=>{
  updateBlog(
  blog.id,
  {...blog, title:blogTitle, content: blogContent, image:blogImg }
  )
  setEditable(false);
}

  return (
    <div>
      <input type="text" 
      value={blogTitle} 
      onChange={(e)=> setBlogTitle(e.target.value)}
       readOnly={!edit}/>
       

      <input type="text" 
      value={blogContent} 
      onChange={(e)=> setBlogContent(e.target.value)}
       readOnly={!edit}/>

    <input type="file" 
      value={blogImg} 
      onChange={(e)=> setBlogImg(e.target.value)}
       readOnly={!edit}/>



       <button onClick={()=>{
        if(edit){
          editBlog();
        }
        else{
          setEditable((prev)=> !prev);
        }
       }}>
           {edit ? "📁" : "✏️"}
       </button>

       <button onClick={()=> deleteBlog(blog.id)}>
     
        ❌
       </button>
    </div>


  
  )
}

export default BlogCard
