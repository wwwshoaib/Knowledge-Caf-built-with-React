

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import { useState } from 'react'
import { useEffect } from 'react';
import Bookmarks from './components/Header/Bookmarks/Bookmarks';

function App() {

  const [blogs, setBlogs] = useState([]);
  useEffect ( () => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => console.log(data))
  } ,[])

  

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-screen-xl mx-auto'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
   
    
     
    </>
  )
}

export default App
