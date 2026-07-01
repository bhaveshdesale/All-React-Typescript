import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import BlogForm from './components/BlogForm'
import BlogCard from './components/BlogCard'
import Footer from './components/Footer'
import { BlogContextProvider, useBlog } from './context'

function App() {

  // global blogs state
const [blogs, setBlogs]=useState([]);

const addBlog=(blog)=>{
    setBlogs((prev)=>[{
      id:Date.now(), ...blog
    }, ...prev])
}



const updateBlog=(id, blog)=>{
  setBlogs((prev)=> prev.map((prevBlog)=> prevBlog.id===id ? blog : prevBlog))

}


const deleteBlog=(id)=>{
  setBlogs((prev)=> prev.filter((blog)=> blog.id!==id))

}


useEffect(()=>{
  const blogData=localStorage.getItem("blogs");
  if(!blogData){
    console.log("eror")
  }
  else{
        const parsedData=JSON.parse(blogData)

  }
  setBlogs(blogData);
}, [])


useEffect(()=>{
  localStorage.setItem("blogs", JSON.stringify(blogs))
}, [blogs])






  return (
    <BlogContextProvider value={{addBlog, blogs, deleteBlog, updateBlog}}>
  <div className="main-container">
    <Header/>
    <div className='main'>
      <BlogForm/>

      <div>
        {blogs.map((blog)=>(
          <div key={blog.id}>
            <BlogCard blog={blog} />
          </div>

        ))}
      </div>
    </div>
    <Footer/>

  </div>
  </BlogContextProvider>
  )
}

export default App
